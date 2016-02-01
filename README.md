Filebrowser Ajax
---------------------

The FileBrowser Ajax module displays contents of a given directory as a node on your Backdrop site.
The use case for this module is a sidebar with click-to-insert file names next to your node edit/create screen.

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

This module is working for specific use cases (custom setup).
Do NOT use this module together with Filebrowser module.
Todos for this module:
- insert into CKeditor (plain textbox, Full HTML and Ace Editor work well).
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

Javascript enabled on your website

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

This module is one of two branches of Filebrowser module.
This module is more for a specific use-case for content creators.
Filebrowser (the other) is more of a general purpose module possibly better for administrators.

Allows site administrators to expose a particular file system folder and all of its subfolders with a fancy FTP-like interface to site visitors. File meta information (via descript.ion and files.bss) is supported. The module also allows these metafiles to store special content, which can be parsed with a callback. If no callback is specified in the file, only the description will be fetched.

This module tries to protect your files outside of the public folder from being listed, as well as trying to protect version control metafiles (CVS and .svn folders) from being listed, but there is no guarantee as usual, that this will never happen. If you find a bug, feel free to submit a bug report.

The FileBrowser module displays contents of a given directory as a node on your Backdrop site.  The node will display a list of the files and folders the same way it is listed on the server. Folder and files can be up- and downloaded by users with proper permissions. The module provides all sorts of permissions. Node settings can be such that certain files types are excluded from display and/or transfer.

One of the most obvious use cases for the FileBrowser module is a file sharing functionality or personal file directories for site users.

To actually use the module for the use case of content editor file-browsing sidebar:
"The content creator uploads files which they can view in their sidebar, which they can click each file icon to insert the path to it into the text editor on the node create/edit screen":

- create a node of the content type "directory listing" (supplied by this module).

- make sure you fill out correctly the field "The system file path to the directory".

- you may want a custom hook to auto-create these for each content creator

- for example, if you were to provide public access to a pdf folder with this, put /files/pdf in the system file path field.

- for example, if you were to provide private access to a personal folder with this, put /files/[username] in the system file path field and use the module's permissions

- Then, users could upload and view pdfs to just that folder (or make directories within that folder)

- make a View with a display of Block

- make a Layout that contains a sidebar (for example, 2 column) with a path such as "node/add" and place the block created in the above step in the sidebar.

- then, when a content creator is creating a node (piece of content), they have a sidebar next to the text editor from which they can click on the file icons (text, pdf, image, etc) to insert that file into their current document.  They can drag and drop a file to the sidebar and press upload to place the file in the list without page refresh.  They can create folders and organize their files within their personal folders without page refresh.  This saves time in referencing files (Word documents, images, etc) in documents for content creators, but is not exactly a "wysiwig photo" solution.

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
