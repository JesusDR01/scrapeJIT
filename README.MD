### scrapeJIT CLI
- Add content from website to clipboard easily!
- Create snippets easily accesible.
- Integration recommended: [Wox](http://www.wox.one/) and [Powertoys run](https://github.com/microsoft/PowerToys/releases)
- Get text from image url.
<hr/>

## How to install
`cd ~` 
or `cd c:/Users/<userName>/`

Clone this repository. 

`cd ./scrapeJIT`




Optional:

`npm install` if you want to use source code instead of .exe

You can add `c:/Users/<userName>/scrapeJIT ` 
to environment path, so you can use scrapeJIT command everywhere
## How to use 
#### Examples to scrape content 
##### powershell
`./scrapeJIT.exe --url "https://simplewikipedia.org/wiki/Steve_Jobs" --selector "#mw-content-text" `
##### Invisible execution
`./scrapeJIT.vbs --url "https://simplewikipedia.org/wiki/Steve_Jobs" --selector "#mw-content-text" `
##### Powertoys
<img src="https://image.prntscr.com/image/tgMW4UiKQYq_lYtTXnAgPg.png" />

#### Examples to create snippets
##### Using clipboard data
`./scrapeJIT.exe --createsnippet <snippetName>`

##### Using custom data
`./scrapeJIT.exe --createsnippet <snippetName> --snippetdata <dataString>`

##### Examples to use snippets
##### Using wox
You need to specify scrapeJIT folder
<img src="https://image.prntscr.com/image/YJtMUrY9RSixoOxCNprNHA.png"/>
<img src="https://image.prntscr.com/image/EvRe1_GBQgmGyHAjOK-Ylg.png">


If you cant find the file restart wox or click Reindex in Wox settings.

##### Using Powertoys
<img src="https://image.prntscr.com/image/aO-oNyPQS5eC1P99WTHrMQ.png">

#### Parameters
```
--url <type> ("Specify url")
--selector <type> ("Specify sele ctor")
--cookies <type> ("Cookies needed to get html)
--body <type> ("Specify body request")
--snippetcreate <type> ("Specify name to snippet file")
--snippetdata <type> ("Specify snippet content")
--snippetdelete <type> ("Specify snippet name to delete") 
--img <type> ("Specify imgUrl to get content")
```