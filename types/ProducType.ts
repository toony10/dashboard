export default interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  category: string
  brand: string
  thumbnail: string
  sku: string
  weight: number
  dimensions: {
    width: number
    height: number
    depth: number
  }
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
  }
  tags: string[]
  reviews: {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
  }[]
  images: string[]
}
