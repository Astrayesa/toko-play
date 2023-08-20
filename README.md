# TokoPlay

TokoPlay is Tokopedia Play clone for my learning purpose.

## Clone this repo
```bash
git clone https://github.com/Astrayesa/toko-play.git
cd toko-play
```


## Installation

Use the package manager [npm](https://www.npmjs.com/) to build and run TokoPlay.

```bash
npm install
```

## Run

```bash
npm start
```

## API List and Database Schema

### Video Schema

```JSON
{
    _id: ObjectID
    title: string
    url: string
    thumbnail_url: string
    products: array
}
```

### GET /videos
returns _id, title, thumbnail for all video

* Headers
    * Content-type: application/json  

* Success respose:
    * Status code: 200
    * Content
    ```JSON
    [ 
        {
            _id: int,
            title: string,
            thumbnail_url: string
        },
        {
            _id: int,
            title: string,
            thumbnail_url: string
        },
        ...
    ]
    ```

* Error response:
    * Status code: 404
    * Content:
    ```JSON
    {
        status: 404,
        msg: "Gagal mendapatkan data video"
    }
    ```

### GET /videos/:id
Return detailed data for specific video

* params:
    * id: [Integer]

* Headers:
    * Content-Type: application/json

* Success response:
    * Status code: 200
    * Content:
    ```JSON
    <video object>
    ```

* Error response: 
    * Status code: 404
    * Content:
    ```JSON
    {
        status: 404,
        msg: "Video tidak ditemukan"
    }
    ```

### POST /videos
Add new video

* Headers:
    * Content-Type: application/json

* Body:
```JSON
{
    title: string,
    url: string,
}
```

* Success response:
    * Status code: 201
    * Content:
    ```JSON
    {
        status: 201,
        msg: "Berhasil menambahkan video"
        data: <video object>
    }
    ```

* Error response:
    * Status code: 400
    * Content:
    ```JSON
    {
        status: 400,
        msg: "Gagal menambahkan video"
    }
    ```

### GET /products/:video_id
Return all comment of specific video

* params:
    * video_id: [ObjectID]

* Headers:
    * Content-Type: application/json

* Success response:
    * Status code: 200
    * Content:
    ```JSON
    [
        <Produt Object>,
        <Produt Object>,
        ...
    ]
    ```

* Error response: 
    * Status code: 404
    * Content:
    ```JSON
    {
        status: 404,
        msg: "Prodcut tidak ditemukan"
    }
    ```

### POST /products/:video_id
Add new product to specific video

* Headers:
    * Content-Type: application/json

* param:
    * video_id: [ObjectID]

* Body:
```JSON
{
    product_title: string,
    product_link: string,
    price: integer
}
```

* Success response:
    * Status code: 201
    * Content:
    ```JSON
    {
        status: 201,
        msg: "Berhasil menambahkan produk baru"
        data: <Prodcut Object>
    }
    ```

* Error response:
    * Status code: 400
    * Content:
    ```JSON
    {
        status: 400,
        msg: "Gagal menambahkan produk"
    }
    ```