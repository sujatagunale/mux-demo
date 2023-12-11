const schema = {
    "title": "hero",
    "name": "Hero",
    "type": "document",
    "fields": [
      { "title": "Title", "name": "title", "type": "string" },
      {
        "title": "Videos",
        "name": "video",
        "type": "array",
        "of": [{
            name: "outcomes",
            title: "Outcomes",
            type: "document",
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                },
                {
                    name: 'video',
                    title: 'Video',
                    type: 'mux.video'
                }
            ]
        }]
      }
    ]
  }

export default schema