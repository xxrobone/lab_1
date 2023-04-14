# Version control
(pdf documents in teams, comment to myself)
### merge
mergin branches (could be done by pull request on github, then merging the branches)

### rebase
Rewrites history, reapplying commits on top of another base branch

## that while merge preserves history as it happened, rebase rewrites it

### add
Adding the files to commit

### commit 
write message of whats been committed

### switch <branchname>
Switch/ changing branches

### switch -c <branchname>
if branch does not exist creates a new one

### switch --create=<subbranch> <parentbranch> (--create or -c)
creates a "sub/child" branch under a branch

### restore
restoring commits to prior versions

## Git flow

# main - > relaeses - >  < - develop - > features 
When mergin, tags to know what the current version is called

## main
## develop
## features (sub branches)
After merge safe to delete feature branch 

Develop - > continue createing new features (branches)
merge to main v 1.1
before "closing the branch after merging from new features" see that its a working project

### hotfixes - > to add in release before mergin to main 
continues work flow adding fixes
 merge to develop - > main v 1.2
etc...


## Trunk base 
Usually every release goes thru main
Works best when having automation and tests

### Main branch
### Develop

Shorter faster changes, not too "long lived"
Trying to avoid "Merge hell"
More commits, smaller changes






