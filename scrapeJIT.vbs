Dim args, path, command
set args = Wscript.Arguments
Set argsArraylist = CreateObject("System.Collections.ArrayList")

DIM allArgs
For each arg in args
	argsArraylist.Add arg
Next
allArgs = join(argsArraylist.ToArray(), " ")
scriptdir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
programPath = scriptdir + "./scrapeJIT.exe "
command = programPath + allArgs
Dim objShell
Set objShell = WScript.CreateObject("WScript.Shell")
objShell.Run(command),vbhide