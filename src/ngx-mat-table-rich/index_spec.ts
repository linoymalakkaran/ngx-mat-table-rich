import {
  SchematicTestRunner,
  UnitTestTree,
} from "@angular-devkit/schematics/testing";
import * as path from "path";

describe("ngx-mat-table-rich", () => {
  const schematicRunner = new SchematicTestRunner(
    "schematics",
    path.join(__dirname, "./../collection.json")
  );

  const workspaceOptions: any = {
    name: "workspace",
    newProjectRoot: "projects",
    version: "0.5.0",
  };

  const appOptions: any = {
    name: "schematest",
  };

  const schemaOptions: any = {
    name: "foo",
    project: "schematest",
    path: "app",
  };

  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await schematicRunner
      .runExternalSchematicAsync(
        "@schematics/angular",
        "workspace",
        workspaceOptions
      )
      .toPromise();
    appTree = await schematicRunner
      .runExternalSchematicAsync(
        "@schematics/angular",
        "application",
        appOptions,
        appTree
      )
      .toPromise();
  });

  it("works", (done) => {
    schematicRunner
      .runSchematicAsync("ngx-mat-table-rich", schemaOptions, appTree)
      .toPromise()
      .then((tree) => {
        const appComponent = tree.readContent(
          `/projects/schematest/src/app/foo/${schemaOptions.name}.module.ts`
        );
        console.log("Generated file => ");
        console.log(appComponent);
        //expect(appComponent).toContain(`name = '${schemaOptions.name}'`);
        const moduleName = "Foo";
        expect(appComponent).toContain(`export class ${moduleName}Module`);
        done();
      }, done.fail);
  });
});
