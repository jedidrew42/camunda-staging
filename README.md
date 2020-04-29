# camunda.com-new

Workspace for camunda.com rework team

Build hugo page locally with

```
hugo server -b http://localhost:1313/

```

Build theme locally in 'themes/hugo-bootstrap-premium' with

*Please install node 9.11.1 before*

```
// install npm
npm install

// without watch
npx webpack

// with watch
npx webpack --watch true
```


## Update of Camunda BPM or Camunda Modeler
Latest Version, Release Date and Download Links of Camunda BPM and Camunda Modeler are managed using a data json file.
The file is located in
```
/data/releases.json
```
When a new Camunda BPM or Camunda Modeler version has been released, you need to update the releases.json file.
If there is a preview release (alpha release), you also need to set the
```
showAlpha: true
```

Please note that the download links for the Camunda Modeler are automatically generated just based on the version number.
