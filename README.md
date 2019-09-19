### Contributing

#### 1. Pull last changes from remote master branch to local master branch

```
git pull origin master
```

#### 2. Create new branch

```
git branch nd_feature_name
```

**nd** - shorthand author's name _(nd - n1ghtdev)_ **feature_name** - describes
what will be created _(like nd_mainpage or nd_fix-slider)_

#### 3. Checkout to created branch

```
git checkout nd_feature_name
```

#### 4. Write code and commit changes

Add all changed files to the stage

```
git add .
```

Commit changes

```
git commit -m "description of this commit"
```

Push local branch (nd_feature_name) to remote

```
git push origin nd_feature_name
```

#### 5. Create `Merge Request` on repo page

- If work in this branch is done and reviewed by maintainers feel free to merge
  to master.
- If work not done yet, you can commit more changes and then merge to master.

Make sure to check next options when merging to master:

- Delete source branch
- Squash commits

**`IMPORTANT:` Merge Request must be reviewed by other maintainers before
merging to master.**

### Quick Start

#### 1. Installation

```
git clone https://gitlab.com/n1ghtdev/lafka
```

#### 2. Run `npm install`

This will install all project dependencies from [package.json](./package.json)
file.

#### 3. Run `npm start`

Will start `webpack-dev-server` with hot-reloading on
[localhost:3000](http://localhost:3000).
