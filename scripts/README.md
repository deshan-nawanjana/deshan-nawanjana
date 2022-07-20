# Useful Scripts and Commands for PC Maintenance

This document contains scripts that may be useful on system reinstall or recovery. Some of the scripts do critical changes to the system. Therefore, be careful while executing them.

## Registration Entries (.reg)

- ### Context Menu Item "Open Command Window Here" for File Explorer
Access your command prompt targeting the current directory is important for Git repositories and many other operations.
    > Select the file [Enable](./reg/open_cmd_here_context_enable.reg) or [Disable](./reg/open_cmd_here_context_disable.reg) this context menu item

- ### Turn Off and Turn On Windows Defender
Depends on your requirement, you may need to turn on of turn off Windows Defender. This action can disable or enable the defender that the system unable to change this status automatically.
    > Select the file to [Turn Off](./reg/windows_defender_disable.reg) or [Turn On](./reg/windows_defender_enable.reg) the Windows Defender

- ### Windows DPI Scale Fix
Newer Windows versions have this issue that the applications created using some older frameworks (like .NET 3.5) become blurry.
    > Open the file to [Fix DPI Scaling](./reg/fix_windows_dip_scaling.reg) issue

- ### Enable or Disable Windows Photo Viewer
Newer Windows versions offer Photos app and have disabled the Windows Photo Viewer by default.
    > Select the file [Enable](./reg/windows_photo_viewer_enable.reg) or [Disable](./reg/windows_photo_viewer_disable.reg) the Windows Photo Viewer

- ### Remove or Restore User Folders from File Explorer Root
In Windows 10 and 11, File Explorer displays the user folders such as Desktop, Documents, Downloads and more in the root view of This PC. This feature can be annoying for some of people and it is removable.
    > Select the file to [Remove](./reg/this_pc_user_folders_remove.reg) or [Restore](./reg/this_pc_user_folders_restore.reg) the user folders from File Explorer

- ### Remove Windows 11 Side Panel Volumes Duplication
Side panel of Windows 11 File Explorer, displays the connected USB devices twice.
    > Select the file to [Remove](./reg/explorer_drives_duplication_remove.reg) this duplication