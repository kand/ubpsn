# ubpsn
Uptown/Buena Park Solidarity Network website.

## Setup

### Initial

1. Install [yarn](https://classic.yarnpkg.com/en/).
2. Run `yarn install` to run dependencies.

### SSH

1. Generate an [ssh key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
2. Provide the generated public key to the web admin.
3. Create a file `.shell_config` that contains a variable `WEBSITE_SSH=<user>@<host>` where `user` is your ssh username and `host` is the host of the site.

### Deploy

After setting up your SSH, run `yarn deploy` to deploy the contents of the `dist/` directory to the public folder.
