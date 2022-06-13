import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { normalize, strings } from "@angular-devkit/core";
import {
  apply,
  applyTemplates,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  url,
} from "@angular-devkit/schematics";
// import { Schema as SchematicComponentHeader } from "./schema";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngxMatTableRich(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // convert workspace to string
    const workspaceAsBugger = tree.read("angular.json");
    if (!workspaceAsBugger) {
      throw new SchematicsException("Not an Angular Project");
    }
    const workspace = JSON.parse(workspaceAsBugger.toString());

    if (!_options.project) {
      _options.project = workspace.defaultProject;
    }

    const projectName = _options.project as string;

    const project = workspace.projects[projectName];

    const projectType = project.projectType === "application" ? "app" : "lib";

    if (_options.path === undefined) {
      _options.path = `${project.sourceRoot}/${projectType}`;
    } else {
      _options.path = `${project.sourceRoot}/${_options.path}`;
      // _options.path = `${project.sourceRoot}/${projectType}/${_options.path}`;
    }

    _options.selector =
      _options.selector ||
      buildSelector(_options, (project && project.prefix) || "");

    const templateSource = apply(url("./files"), [
      _options.store ? noop() : filter((path) => !path.includes("store")),
      _options.resolver
        ? noop()
        : filter((path) => !path.includes("resolvers")),
      applyTemplates({
        ...strings,
        ..._options,
      }),
      move(normalize(_options.path as string)),
    ]);

    return chain([
      mergeWith(templateSource),
      _options && _options.store ? addRequiredPackages(tree, context) : noop(),
    ]);
  };
}

function buildSelector(options: any, projectPrefix: string) {
  let selector = strings.dasherize(options.name);
  if (projectPrefix) {
    selector = `${projectPrefix}-${selector}`;
  }

  return selector;
}

function addRequiredPackages(_tree: Tree, _context: SchematicContext) {
  return (_host: Tree) => {
    if (_tree.exists("package.json")) {
      const packageJsonString = _tree.read("package.json")!.toString("utf-8");
      const packageJson = JSON.parse(packageJsonString);
      let runScript = false;
      packages.forEach((element) => {
        if (!packageJson[element.type]) {
          packageJson[element.type] = {};
        }
        if (!packageJson[element.type][element.name]) {
          packageJson[element.type][element.name] = element.version;
          _tree.overwrite("package.json", JSON.stringify(packageJson, null, 2));
          runScript = true;
        }
      });
      _context.logger.log(
        "info",
        `Required pacakages has been added to package.json`
      );
      if (runScript) {
        _context.addTask(new NodePackageInstallTask());
      }
    }
    return _tree;
  };
}

const packages = [
  { type: "dependencies", name: "@material-table", version: "11.0.0" },
];
