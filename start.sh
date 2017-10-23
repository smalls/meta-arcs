#!/bin/sh

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

LOGS="logs/arcs-particles.log logs/arc-stories.log logs/arcs-cdn.log logs/arcs-events.log"
rm $LOGS

(cd arcs-particles && ../server.py -p 8888 > ../logs/arcs-particles.log &)
(cd arc-stories && ../server.py -p 8080 > ../logs/arc-stories.log &)
(cd arcs-cdn && ../server.py -p 5001 > ../logs/arcs-cdn.log &)
(cd arcs-custom-events && ../server.py -p 9999 > ../logs/arcs-events.log &)

sleep 1s
tail -f $LOGS
