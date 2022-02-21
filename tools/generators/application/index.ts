/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rule, chain, externalSchematic } from '@angular-devkit/schematics';
import { Tree } from '@nrwl/devkit';

export default function createApp(_options: any) {
  return function (_tree: Tree, schema: any): Rule {
    // await libraryGenerator(tree, { name: schema.name });
    // await formatFiles(tree);
    // return () => {
    //   installPackagesTask(tree);
    // };
    return chain([externalSchematic('@nrwl/angular', 'application', { name: _options.name })]);
  };
}
