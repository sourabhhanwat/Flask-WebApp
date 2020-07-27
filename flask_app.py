from __future__ import division, print_function
# coding=utf-8
import os

# Flask utils
from flask import Flask, redirect, url_for, request, render_template

 
# Define a flask app
app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
	# Main page
	return render_template('index.html')


if __name__ == '__main__':
	app.config['DEBUG'] = True
	app.run(host='0.0.0.0', port='8080')
