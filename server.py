#!/usr/bin/env python3
#
# Copyright (c) 2017 Google Inc. All rights reserved.
# This code may only be used under the BSD style license found at
# http://polymer.github.io/LICENSE.txt
# Code distributed by Google as part of this project is also
# subject to an additional IP rights grant found at
# http://polymer.github.io/PATENTS.txt

from http.server import SimpleHTTPRequestHandler
import socketserver
import argparse

class CORSRequestHandler(SimpleHTTPRequestHandler):
	def end_headers (self):
		self.send_header('Access-Control-Allow-Origin', '*')
		SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-p', '--port', type=int, default=8000)
    parser.add_argument('-b', '--bindAddress', default='localhost')
    args = parser.parse_args()

    print ('binding to %s:%s' % (args.bindAddress, args.port))
    httpd = socketserver.TCPServer((args.bindAddress, args.port),
            CORSRequestHandler)
    httpd.serve_forever()
