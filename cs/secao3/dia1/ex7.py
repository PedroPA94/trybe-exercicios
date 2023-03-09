from pymongo import MongoClient


with MongoClient() as client:
    db = client.library
    books = db.books

    pipeline = [
        {
            '$match': {
                'status': 'PUBLISH'
            }
        },
        {
            '$unwind': '$categories',
        },
        {
            '$group': {
                '_id': '$categories',
                'count': {'$sum': 1}
            }
        },
        {
            '$sort': {
                'count': -1
            }
        }
    ]

    categories_count = books.aggregate(pipeline)

    for category in categories_count:
        print(category['_id'], category['count'])
