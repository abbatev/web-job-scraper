from flask_app.config.connect_sql import connectToMySQL
from flask import flash
import re

class Listing:
    db="listing"
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.url = data['url']
        self.description= data['description']
        self.notes = data['notes']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    

    #create
    def create_listing(cls, data):

        if 'description' not in data:
            data['description'] = "The scraper hasn't done its thing yet. Give it some time, bro."
        if 'notes' not in data:
            data['notes'] = "You haven't added any notes yet."

        query = """
        INSERT INTO listings (description, notes)
        VALUES (%(description)s, %(notes)s)
        """
        
        return connectToMySQL(cls.db).query_db(query, data.__dict__)
    
    
    #read

    #get all
    @classmethod
    def get_all_listings(cls):
        query="""
        SELECT * FROM listings
        """

        results=connectToMySQL(cls.db).query_db(query)

        all_listings=[]

        for row in results:
            one_listing=cls(row)

            all_listings.append(one_listing)
        return all_listings

#get one
    @classmethod
    def get_one_listing(cls, data):
        query="""
        SELECT * FROM listings
        WHERE listings.id=%(id)s;
        """
        results=connectToMySQL(cls.db).query_db(query,data)

        if results:
            one_listing=cls(results[0])
            return one_listing

    #update
    @classmethod
    def update_notes(cls, data):
        query="""
        UPDATE listings
        SET notes=%(notes)s
        WHERE id=%(id)s; 
        """
        return connectToMySQL(cls.db).query_db(query,data)
    
    @classmethod
    def update_description(cls, data):
        query="""
        UPDATE listings
        SET description=%(description)s
        WHERE id=%(id)s; 
        """
        return connectToMySQL(cls.db).query_db(query,data)
    
    #delete
    @classmethod
    def delete_listing(cls, data):
        query="""
        DELETE FROM listings
        WHERE id=%(id)s;
        """
        return connectToMySQL(cls.db).query_db(query, data)

    #validate
    @staticmethod
    def validate_notes(data):
        is_valid=True

        if len(data['notes']) ==0:
            is_valid=False
            flash('Please enter some notes', 'notes')
        elif len(data['notes']) < 3:
            is_valid=False
            flash('Please enter at least 3 characters', 'notes')

        return is_valid
    
    @staticmethod
    def validate_description(data):
        is_valid=True

        if len(data['description']) ==0:
            is_valid=False
            flash('Please enter a description', 'description')
        elif len(data['notes']) < 3:
            is_valid=False
            flash('Please enter at least 3 characters', 'description')

        return is_valid
    
    @staticmethod
    def validate_url(data):
        is_valid = True

        url_pattern = r'^https?://(?:[a-zA-Z0-9-]+\.?)+[a-zA-Z]{2,7}(?:/[\w-]+)*'
        if not re.match(url_pattern, data['url']):
            is_valid = False
            flash('Please enter a valid URL', 'url')
        elif len(data['url']) < 3:
            is_valid = False
            flash('Please enter at least 3 characters', 'url')

        return is_valid







