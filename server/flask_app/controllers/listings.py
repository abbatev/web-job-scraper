from flask_app import app
from flask import request, jsonify
from flask_cors import cross_origin

from server.flask_app.models import listing

# List all listings (for the dashboard)
@app.route('/api/listings/', methods=['GET'])
@cross_origin()
def get_all_listings():
    all_listings = listing.Listing.get_all_listings()
    return jsonify(all_listings)

# # Create a new listing
# @app.route('/api/listings', methods=['POST'])
# @cross_origin()
# def create_listing():
#     data = request.json  # Assuming JSON data is sent from the client
#     if not listing.Listing.validate_listing(data):
#         return jsonify({'message': 'Validation failed'}), 400
#     new_listing = listing.Listing.create_listing(data)
#     return jsonify(new_listing), 201

# # Edit an existing listing
# @app.route('/api/listings/<int:id>', methods=['PUT'])
# @cross_origin()
# def update_listing(id):
#     data = request.json
#     if not listing.Listing.validate_listing(data):
#         return jsonify({'message': 'Validation failed'}), 400
#     updated_listing = listing.Listing.update_listing(id, data)
#     return jsonify(updated_listing)

# # View details of a specific listing
# @app.route('/api/listings/<int:id>', methods=['GET'])
# @cross_origin()
# def view_listing(id):
#     one_listing = listing.Listing.get_one_listing(id)
#     return jsonify(one_listing)

# # Delete a listing
# @app.route('/api/listings/<int:id>', methods=['DELETE'])
# @cross_origin()
# def delete_listing(id):
#     result = listing.Listing.delete_listing(id)
#     if result:
#         return jsonify({'message': 'Listing deleted successfully'})
#     else:
#         return jsonify({'message': 'Listing not found'}), 404
