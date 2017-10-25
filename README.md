There are a few different repos I'm using to develop new particles & recipes.
This gathers all of them into a single repo (using git submodules) to make
setup in different environments quick.

# starting

Basic version:

```bash
  > ./start.sh
```

This will print a few recommended URLs to get started with and will start a
server on localhost.

# setup

Add upstream branches (to stay up to date) in some repositories:

```bash
  > (cd arcs-cdn && git remote add upstream git@github.com:PolymerLabs/arcs-cdn.git)
  > (cd arc-stories && git remote add upstream git@github.com:sjmiles/arc-stories.git)
```

And update:

```bash
  > (cd arcs-cdn && git pull upstream gh-pages --rebase)
  > (cd arc-stories && git pull upstream master --rebase)
```
