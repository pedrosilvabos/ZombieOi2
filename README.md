# ZombieBox

## Quick PC fix
Change file node_modules/zombiebox-extension-dependency-injection/lib/builder.js and add line
importPath = importPath.replace(/\\/g, '/');
before
return `import ${importSpecifier} from "${importPath}";`;
it should be approximately at line 157 of file.

## Getting started

```bash
npm install 
npx zombiebox run
```



