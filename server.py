#!/usr/bin/env python3
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
