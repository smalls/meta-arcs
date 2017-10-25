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

# arcs-custom-events

Pages to demonstrate embedding of arcs metadata within a page.

Currently, two interesting pages:

- [index.html](https://smalls.github.io/meta-arcs/arcs-custom-events/index.html) is a
  sample page with no arcs metadata.
- [index-with-arcs.html](https://smalls.github.io/meta-arcs/arcs-custom-events/index-with-arcs.html)
  is the same page, but with arcs metadata embedded (a custom schema type, a
  particle that consumes that, and a recipe importing both of those).
