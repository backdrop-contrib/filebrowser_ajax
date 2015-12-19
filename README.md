Filebrowser Ajax
---------------------

The FileBrowser Ajax module displays contents of a given directory as a node on your Backdrop site.
The use case for this module is a sidebar with clickable file names next to your node edit/create screen.

CONTENTS OF THIS FILE
---------------------

 - Introduction
 - Tested
 - Known Issues
 - Special Thanks
 - Requirements
 - Installation
 - Coming From Drupal?
 - Usage
 - License
 - Credits
 - Maintainers

TESTED
-----

This module is slightly working but not ready for production.
Do not use this module together with Filebrowser module.
Todos for this module to get to production:
- insert into CKeditor (plain textbox and Ace Editor are good).
- better (tested) permissions.
- good documentation for setting this module up.

KNOWN ISSUES
---------------------

Amazon S3 hosting is not ported/tested yet.  Contact if you would like this functionality.

SPECIAL THANKS
--------------

This module port has been sponsored by VR Sites. (http://beta.vrsites.com)  Special thanks to them!

REQUIREMENTS
------------

Javascript

INSTALLATION
------------

Install this module using the official Backdrop CMS instructions at https://backdropcms.org/guide/modules
This module requires no other libraries or special server configuration.

COMING FROM DRUPAL?
-------------------

nothing substantially changed.

PERMISSIONS
------------

yes, this module installs permissions for your roles to use

USAGE
-----

Allows site administrators to expose a particular file system folder and all of its subfolders with a fancy FTP-like interface to site visitors. File meta information (via descript.ion and files.bss) is supported. The module also allows these metafiles to store special content, which can be parsed with a callback. If no callback is specified in the file, only the description will be fetched.

This module tries to protect your files outside of the public folder from being listed, as well as trying to protect version control metafiles (CVS and .svn folders) from being listed, but there is no guarantee as usual, that this will never happen. If you find a bug, feel free to submit a bug report.

The FileBrowser module displays contents of a given directory as a node on your Backdrop site.  The node will display a list of the files and folders the same way it is listed on the server. Folder and files can be up- and downloaded by users with proper permissions. The module provides all sorts of permissions. Node settings can be such that certain files types are excluded from display and/or transfer.

One of the most obvious use cases for the FileBrowser module is a file sharing functionality or personal file directories for site users.

To actually use the module, create a node of the content type "directory listing" (supplied by this module).  Make sure you fill out correctly the field "The system file path to the directory".  For some examples, if you were to provide public access to a pdf folder with this, put /files/pdf in the system file path field.  Then, users could upload and view pdfs to that folder.  If you were to provide access to each user a personal folder with this, put /files/[username] in the system file path field.  Then, each user could upload and view certain filetypes to their folder.

LICENSE
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.

CREDITS
-----------

This module is based on the Filebrowser module for Drupal, originally written and maintained by a large number of contributors, including:

Clivesj <https://www.drupal.org/u/clivesj>

Nicolas-georget <https://www.drupal.org/u/nicolas-georget>

Yoran <https://www.drupal.org/u/yoran>

Susurrus <http://drupal.org/user/118433>

Arnumeral <http://arnumeral.fr/>

This module port has been sponsored by VR Sites. (http://beta.vrsites.com)

MAINTAINERS
-----------

- biolithic <https://github.com/biolithic>

Ported to Backdrop by:

- biolithic <https://github.com/biolithic>
