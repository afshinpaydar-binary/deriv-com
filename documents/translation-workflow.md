## Translation Workflow

The purpose of this document is to explain the general workflow and commands required for our translation process on Deriv.com

---

### General workflow will be as such:
⚠️ Note: If you're not managing the translations on Crowdin, the workflow usually stops at step #3.

<br />

1. PR will be based on crowdin branch

    - if you dont have crowdin branch

    ```sh
    git fetch upstream crowdin:crowdin
    git checkout crowdin
    git checkout -b [_your_branch_name]
    ```

    -   if you have crowdin branch

    ```sh
    git checkout crowdin
    git pull upstream crowdin
    git checkout -b [_your_branch_name]
    ```

2. Make your changes and submit for review followed by checking by QA. Only the `English version` is checked at this staged by QA as the new strings have not been extracted for translation purposes.

3. Once it passes QA, it will be merged into the Crowdin branch.

<br />

### Extracting & Managing Translations:

4. Extract translations from Crowdin branch
    -   Make sure you have the latest crowdin changes, resolve conflicts if any

    ```sh
    git pull upstream crowdin
    ```

   -   Extract translation text to update `messages.json`

    ```sh
    npm run translate:extract
    ```
    
   -	Upload & download. This step uploads the text strings to Crowdin Platform (To be translated by translators) and downloads the latest `ach tags`.
   
   ```sh
    npm run translate:upload
    npm run translate:download
    ```

	 -	Commit your changes

5. Make pull request

   -   Push your changes to your origin, add `-u` flag for the first time push
   
   ```sh
   git push -u origin [_your_branch_name]
   ```

   -   Click on the autogenerated link from terminal to open the PR

   -   Make sure to change the PR base to `crowdin` branch


6. Download/get latest crowdin translations **(Once strings are translated on Crowdin Platform)**.

    ```sh
    npm run translate:download
    ```
    
7. Make pull request, get reviewed & merged (This triggers a build and redeploys an updated version of the crowdin test link with the new translated texts).

8. The task now goes through a translation regression check to test for all other languages.

9. Once ready, the crowdin branch can be merged into master awaiting to be rebased.

### Merging from Crowdin to Master & Rebasing:

1. Create a PR from Crowdin to Master.
2. Once approved and merged, the staging link will need to be tested for translations.
3. Rebase Crowdin branch onto master & delete any irrelevant commits.
⚠️ Note: Be very careful here and do take note to compare with the commits on master.
   ```sh
    git rebase --interactive
   ```
