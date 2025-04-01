'use client'

import { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { fetchProducts } from '@/redux/features/productsSlice'
import Image from 'next/image'

const itemsPerPage = 5

export default function ProductsPage() {
    const dispatch = useAppDispatch()
    const { data: products, status } = useAppSelector((state) => state.products)

    const [category, setCategory] = useState('all')
    const [sortBy, setSortBy] = useState<'price' | 'rating'>('price')
    const [order, setOrder] = useState<'asc' | 'desc'>('asc')
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts())
        }
    }, [status, dispatch])

    const categories = Array.from(new Set(products.map((p) => p.category)))

    const filtered = category === 'all'
        ? products
        : products.filter((p) => p.category === category)

    const sorted = [...filtered].sort((a, b) => {
        const aVal = a[sortBy]
        const bVal = b[sortBy]
        return order === 'asc' ? aVal - bVal : bVal - aVal
    })

    const totalPages = Math.ceil(sorted.length / itemsPerPage)
    const paginated = sorted.slice((page - 1) * itemsPerPage, page * itemsPerPage)

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Products</h1>

            {/* Filters & Sorting */ }
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <select
                    className="border rounded p-2"
                    value={ category }
                    onChange={ (e) => {
                        setCategory(e.target.value)
                        setPage(1)
                    } }
                >
                    <option value="all">All Categories</option>
                    { categories.map((cat) => (
                        <option key={ cat } value={ cat }>
                            { cat }
                        </option>
                    )) }
                </select>

                <select
                    className="border rounded p-2"
                    value={ sortBy }
                    onChange={ (e) => setSortBy(e.target.value as 'price' | 'rating') }
                >
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                </select>

                <button
                    onClick={ () => setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc')) }
                    className="border px-3 py-2 rounded bg-gray-100 hover:bg-gray-200"
                >
                    { order === 'asc' ? 'Asc ↑' : 'Desc ↓' }
                </button>
            </div>

            {/* Table */ }
            <div className="border rounded-lg overflow-x-auto">
                { status === 'loading' ? (
                    <p className="p-4">Loading...</p>
                ) : status === 'failed' ? (
                    <p className="p-4 text-red-500">Error fetching products.</p>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Brand</TableHead>
                                <TableHead>Stock</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            { paginated.map((product) => (
                                <TableRow key={ product.id }>
                                    <TableCell>
                                        <Image
                                            src={ product.thumbnail }
                                            alt={ product.title }
                                            width={ 100 }
                                            height={ 100 }
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                    </TableCell>
                                    <TableCell>{ product.title }</TableCell>
                                    <TableCell>${ product.price }</TableCell>
                                    <TableCell>{ product.rating }</TableCell>
                                    <TableCell>{ product.category }</TableCell>
                                    <TableCell>{ product.brand }</TableCell>
                                    <TableCell>{ product.stock }</TableCell>
                                </TableRow>
                            )) }
                        </TableBody>
                    </Table>
                ) }
            </div>

            {/* Pagination */ }
            { totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                    { Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={ i }
                            onClick={ () => setPage(i + 1) }
                            className={ `px-3 py-1 rounded border ${page === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'
                                }` }
                        >
                            { i + 1 }
                        </button>
                    )) }
                </div>
            ) }
        </div>
    )
}
