@echo off
DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:L:\sources\sxs
set /p id=""