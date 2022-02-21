import { Rule, chain, externalSchematic } from '@angular-devkit/schematics';
import { Tree } from '@nrwl/devkit';

export default function createApp(_options: any) {
  return function (_tree: Tree, schema: any): Rule {
    return chain([externalSchematic('@nrwl/angular', 'application', { name: _options.name })]);
  };
}
