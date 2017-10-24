#!/bin/sh
#
# Copyright (c) 2017 Google Inc. All rights reserved.
# This code may only be used under the BSD style license found at
# http://polymer.github.io/LICENSE.txt
# Code distributed by Google as part of this project is also
# subject to an additional IP rights grant found at
# http://polymer.github.io/PATENTS.txt

start_server() {
	SERVER=$1
	PORT=$2

	cat /dev/null > logs/${SERVER}.log

	cd $SERVER
	echo "serve ${SERVER} on port ${PORT} from `pwd`"
	../server.py -p ${PORT} &> ../logs/${SERVER}-${PORT}.log &
	cd ..
}

# kill the subprocesses when exiting this process
# to double-check: ps -o pid,ppid,pgid,cmd
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT


start_server "arcs-cdn" 5001

start_server "arc-stories" 8080

start_server "arcs-particles" 8888
start_server "arcs-custom-events" 9999

parallel --tagstring "{/.}:" --line-buffer tail -f \{\} ::: logs/*.log
