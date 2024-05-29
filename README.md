# Sage 100 Information Center Page
## Overview
The Sage 100 Information Center page has been redesigned to facilitate maintenance of the page.   The idea is the Welcome.html page remains static.   The only changes will reside in the Announcements.csv file. 

Information Center Welcome Page sections: 
- <strong>Top Menu</strong> section contains links to helpful Sage resources
- <strong>Banner</strong> section containing description of the page
- <strong>Announcements Carousel</strong> section containing a set of announcements and their links. Announcements are to be updated by Product Marketing with changes to the Announcements.csv file.   See section below on how to update. 
- <strong>Product Resources</strong> section contains links for Sage 100
- <strong>Integrated Products</strong> section contains links to common Sage 100 integrations in the marketplace. 
- <strong>Footer</strong> section contains standard links as well as Sage 100 specific social links, and the copyright will change for the current year. 

> Use `staging` branch only to push any file changes to GitHub

## Announcements Update Process for Dynamic Carousel
- Using `Excel`, open `Announcements.xlsx` file.<br/>
    - The file contains 4 columns in this order.  <strong>The Header row must remain unchanged.</strong>
        - Announcement_Header
        - Announcement_Text
        - Button_Text
        - Button_link
    - Modify any row entries in this file except the Header row (row 1).
        - You may remove or add as many rows as you like. 
        - The first data row will appear left justified in the carousel.
        - The last data row will appear on the right justified in the carousel.
        - All entries between the first and last rows will appear centered.
        - The 2nd data row is the most important and will appear initially and centered. 
        - <strong>New!</strong> Commas , and quote characters " are allowed in the entries
    - `Save Announcements.xlsx`. 
    - Then `Save as Announcements.csv`. 
        - <strong>This file name must retain its case sensitivity for the file to be loaded into the carousel.</strong> 
- Commit the changes to the staging branch.
- Push the changes up to the GitHub repository. 
    - This push causes a new deployment to the [staging endpoint](https://staging-sage100info.sage.com/welcome.html)
- Review the changes to verify they are as you expect.  
    - If changes do NOT appear as expected, it is possible the staging deployment did not happen.  
    - Ask the CloudOps team for assistance.   
- When ready, create a pull request.  

## Creating a Pull request from `staging` to `master`
### [From Github in the browser](https://github.com/Sage/sagena-info-sage100): 
- Select `Pull Requests`<br>
 ![GitHub Pull Request Button](/assets/readme/Github_main_pullrequest.png "GitHub Pull Request button")
- Select `New Pull Request` <br>
![New Pull Request](/assets/readme/GitHub_pullrequest_new.png "GitHub New Pull Request button")
- For our purposes, you will always pull <strong>INTO</strong> `master` <strong>FROM</strong> `staging`<br>
![Branch Selection](/assets/readme/GitHub_pullrequest_branches_compare.png "GitHub New Pull Request Branch Selection for Compare")
    - I hilighted the arrow to emphasize the direction of the new code. 
    - All merge conflicts should be rectified before creating a pull request
        - See merge conflicts document section below.
    - Review files changed. 
    - Press the `Create Pull Request` button when ready. 
    - In the creation of the Pull Request, you can assign someone in this repository to review the changes and approve the pull reqauest. 

> <strong>Note:</strong>  If you decide you need to make changes after your pull request has been created, but before the request has been pulled in, you have a couple options: <br/>
Find the pull request and close it. Or, continue the modification pushing the latest changes up. 
The current pull request on the `staging` branch will contain the changes.  Meaning there would not be a reason to create another pull request.   
    
### Merge Conflicts
This initial merge has conflicts because the `master` branch was maintained while we were setting up staging.   

This is a one time problem as long as we do not maintain `master` after the initial pull to `master` from `staging` branch.

>Ask for help from `CloudOps` team or `Engineering` to resolve these conflicts. 

## Developer Tools
- [VS Code](https://code.visualstudio.com/Download)
- [Github Desktop](https://desktop.github.com/)

## How to update this readme file 
See [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

See [Visual Studio Code Markdown](https://code.visualstudio.com/docs/languages/markdown)
