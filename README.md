# setup

Add upstream branches (to stay up to date) in some repositories:

  > (cd arcs-cdn && git remote add upstream git@github.com:PolymerLabs/arcs-cdn.git)
  > (cd arc-stories && git remote add upstream git@github.com:sjmiles/arc-stories.git)

And update:

  > (cd arcs-cdn && git pull upstream gh-pages --rebase)
  > (cd arc-stories && git pull upstream master --rebase)
