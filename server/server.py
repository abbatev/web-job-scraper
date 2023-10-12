from flask_app import app
from flask import request
# from flask_app.controllers import users, sightings

@app.route('/job', methods = ['POST'])
def create_job():
  details = request.json['details']
  job = Job(details)
  db.session  


if __name__=='__main__':
    app.run(debug=True, host='localhost', port=5001) 

  
