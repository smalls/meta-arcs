#!/bin/sh
#
# Copyright (c) 2017 Google Inc. All rights reserved.
# This code may only be used under the BSD style license found at
# http://polymer.github.io/LICENSE.txt
# Code distributed by Google as part of this project is also
# subject to an additional IP rights grant found at
# http://polymer.github.io/PATENTS.txt

PORT=9000
echo "starting arcs on localhost:${PORT}"
echo "suggested urls:"
echo "Scott's arc-stories: http://localhost:${PORT}/arcs-cdn/dev/apps/web/?manifest=http://localhost:${PORT}/arc-stories/0.2/arc.manifest"
echo "Matt's arcs-particles: http://localhost:${PORT}/arcs-cdn/dev/apps/web/?manifest=http://localhost:${PORT}/arcs-particles/arcs-particles.manifest"
./server.py -p ${PORT}
