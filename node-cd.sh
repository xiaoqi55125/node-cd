echo "Stop server"
echo "====================================="
forever stop node_cd.js

echo "Update Code"
echo "====================================="
# cd ~/Documents/node/node-cd
# git pull

echo "Restart server"
echo "====================================="
forever start node_cd.js

