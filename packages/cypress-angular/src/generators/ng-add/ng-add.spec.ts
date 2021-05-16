import { readJson, Tree } from '@nrwl/devkit';
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { ngAddGenerator } from './ng-add';

describe('ng-add generator', () => {
  let tree: Tree;

  beforeEach(async () => {
    tree = createTreeWithEmptyWorkspace();

    await ngAddGenerator(tree);
  });

  it('should add cypress to dev dependencies', async () => {
    expect(readJson(tree, 'package.json').devDependencies).toEqual(
      expect.objectContaining({
        '@jscutlery/cypress-mount': expect.any(String),
        cypress: '^7.0.0',
      })
    );
  });
});
