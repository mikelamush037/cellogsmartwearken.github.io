// ====== LOCAL DATABASE SIMULATION ======
class LocalDatabase {
    constructor() {
        this.products = [];
        this.users = [];
        this.orders = [];
        this.init();
    }
    
    async init() {
        await this.loadSampleData();
        await this.loadFromStorage();
    }
    
    async loadSampleData() {
        // Sample products data
        this.products = [
            {
                id: '1',
                name: "Men's Premium Casual Shirt - Blue Check",
                price: 1299,
                originalPrice: 1699,
                discount: 20,
                category: 'men',
                subcategory: 'shirts',
                image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                images: [
                    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                ],
                rating: 4.2,
                reviews: 128,
                featured: true,
                description: 'Premium quality casual shirt with check pattern. Made from 100% cotton for maximum comfort.',
                size: ['S', 'M', 'L', 'XL', 'XXL'],
                color: ['Blue', 'White', 'Gray'],
                stock: 45,
                tags: ['shirt', 'men', 'casual', 'cotton'],
                createdAt: '2024-01-15',
                updatedAt: '2024-01-15'
            },
            {
                id: '2',
                name: "Women's Summer Floral Dress - Yellow",
                price: 2499,
                originalPrice: 2999,
                discount: 15,
                category: 'women',
                subcategory: 'dresses',
                image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                rating: 4.8,
                reviews: 89,
                featured: true,
                description: 'Beautiful summer floral dress perfect for warm weather.',
                size: ['XS', 'S', 'M', 'L'],
                color: ['Yellow', 'Pink', 'White'],
                stock: 32,
                tags: ['dress', 'women', 'summer', 'floral'],
                createdAt: '2024-01-14',
                updatedAt: '2024-01-14'
            },
            {
                id: '3',
                name: "Premium School Backpack - 20L Capacity",
                price: 2199,
                originalPrice: 2799,
                discount: 20,
                category: 'school',
                subcategory: 'bags',
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                rating: 4.3,
                reviews: 56,
                featured: true,
                description: 'Durable school backpack with laptop compartment and multiple pockets.',
                size: ['Standard'],
                color: ['Black', 'Blue', 'Red', 'Gray'],
                stock: 78,
                tags: ['backpack', 'school', 'bag', 'student'],
                createdAt: '2024-01-13',
                updatedAt: '2024-01-13'
            },
            {
                id: '4',
                name: "Kids T-Shirt & Shorts Set - 3 Pieces",
                price: 1199,
                originalPrice: 1499,
                discount: 15,
                category: 'kids',
                subcategory: 'sets',
                image: 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                rating: 4.7,
                reviews: 42,
                featured: true,
                description: 'Comfortable cotton t-shirt and shorts set for kids.',
                size: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
                color: ['Blue', 'Red', 'Green'],
                stock: 56,
                tags: ['kids', 'tshirt', 'shorts', 'set'],
                createdAt: '2024-01-12',
                updatedAt: '2024-01-12'
            },
            {
                id: '5',
                name: "Leather School Shoes - Black",
                price: 2999,
                originalPrice: 3499,
                discount: 10,
                category: 'school',
                subcategory: 'shoes',
                image: 'https://images.unsplash.com/photo-1523480717984-24cba35ae1eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                rating: 4.5,
                reviews: 67,
                featured: false,
                description: 'Premium leather school shoes with comfortable sole.',
                size: ['30', '32', '34', '36', '38', '40'],
                color: ['Black', 'Brown'],
                stock: 45,
                tags: ['shoes', 'school', 'leather', 'formal'],
                createdAt: '2024-01-11',
                updatedAt: '2024-01-11'
            },
            {
                id: '6',
                name: "Complete School Uniform Set",
                price: 3499,
                originalPrice: 4199,
                discount: 15,
                category: 'school',
                subcategory: 'uniforms',
                image: 'https://images.unsplash.com/photo-1624300629296-4e94c01df56f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                rating: 4.9,
                reviews: 112,
                featured: true,
                description: 'Complete school uniform set including shirt, trousers, and tie.',
                size: ['S', 'M', 'L', 'XL'],
                color: ['Navy Blue', 'Gray'],
                stock: 34,
                tags: ['uniform', 'school', 'complete', 'set'],
                createdAt: '2024-01-10',
                updatedAt: '2024-01-10'
            },
            {
                id: '7',
                name: "Men's Casual Jeans - Dark Blue",
                price: 1999,
                originalPrice: 2499,
                discount: 20,
                category: 'men',
                subcategory: 'jeans',
                image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                rating: 4.4,
                reviews: 156,
                featured: false,
                description: 'Comfortable casual jeans made from premium denim.',
                size: ['28', '30', '32', '34', '36', '38'],
                color: ['Dark Blue', 'Light Blue', 'Black'],
                stock: 89,
                tags: ['jeans', 'men', 'casual', 'denim'],
                createdAt: '2024-01-09',
                updatedAt: '2024-01-09'
            },
            {
                id: '8',
                name: "Women's Office Skirt - Black",
                price: 1799,
                originalPrice: 2199,
                discount: 15,
                category: 'women',
                subcategory: 'skirts',
                image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                rating: 4.6,
                reviews: 78,
                featured: false,
                description: 'Professional office skirt made from high-quality fabric.',
                size: ['XS', 'S', 'M', 'L', 'XL'],
                color: ['Black', 'Navy', 'Gray'],
                stock: 42,
                tags: ['skirt', 'women', 'office', 'formal'],
                createdAt: '2024-01-08',
                updatedAt: '2024-01-08'
            }
        ];
    }
    
    async loadFromStorage() {
        try {
            // Load users from localStorage
            const savedUsers = localStorage.getItem('cellogsmartwear_users');
            if (savedUsers) {
                this.users = JSON.parse(savedUsers);
            }
            
            // Load orders from localStorage
            const savedOrders = localStorage.getItem('cellogsmartwear_orders');
            if (savedOrders) {
                this.orders = JSON.parse(savedOrders);
            }
        } catch (error) {
            console.error('Error loading from storage:', error);
        }
    }
    
    async saveToStorage() {
        try {
            localStorage.setItem('cellogsmartwear_users', JSON.stringify(this.users));
            localStorage.setItem('cellogsmartwear_orders', JSON.stringify(this.orders));
        } catch (error) {
            console.error('Error saving to storage:', error);
        }
    }
    
    // Product Methods
    async getProducts(filters = {}) {
        let filteredProducts = [...this.products];
        
        // Apply filters
        if (filters.category) {
            filteredProducts = filteredProducts.filter(p => p.category === filters.category);
        }
        
        if (filters.subcategory) {
            filteredProducts = filteredProducts.filter(p => p.subcategory === filters.subcategory);
        }
        
        if (filters.featured) {
            filteredProducts = filteredProducts.filter(p => p.featured);
        }
        
        if (filters.discount) {
            filteredProducts = filteredProducts.filter(p => p.discount > 0);
        }
        
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            filteredProducts = filteredProducts.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm) ||
                p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        // Apply sorting
        if (filters.sort) {
            switch (filters.sort) {
                case 'price-low':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'newest':
                    filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    break;
                case 'rating':
                    filteredProducts.sort((a, b) => b.rating - a.rating);
                    break;
            }
        }
        
        // Apply pagination
        if (filters.limit) {
            filteredProducts = filteredProducts.slice(0, filters.limit);
        }
        
        return filteredProducts;
    }
    
    async getProduct(id) {
        return this.products.find(p => p.id === id);
    }
    
    async getCategories() {
        const categories = [
            { id: 'men', name: "Men's Wear", icon: 'male', count: this.products.filter(p => p.category === 'men').length },
            { id: 'women', name: "Women's Wear", icon: 'female', count: this.products.filter(p => p.category === 'women').length },
            { id: 'kids', name: "Kids Fashion", icon: 'child', count: this.products.filter(p => p.category === 'kids').length },
            { id: 'school', name: "School Items", icon: 'graduation-cap', count: this.products.filter(p => p.category === 'school').length },
            { id: 'shoes', name: "Shoes", icon: 'shoe-prints', count: this.products.filter(p => p.category === 'shoes').length },
            { id: 'bags', name: "Bags", icon: 'shopping-bag', count: this.products.filter(p => p.category === 'bags').length }
        ];
        return categories;
    }
    
    // User Methods
    async registerUser(userData) {
        const user = {
            id: Date.now().toString(),
            ...userData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.users.push(user);
        await this.saveToStorage();
        return user;
    }
    
    async loginUser(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('cellogsmartwear_current_user', JSON.stringify(user));
            return user;
        }
        return null;
    }
    
    getCurrentUser() {
        const user = localStorage.getItem('cellogsmartwear_current_user');
        return user ? JSON.parse(user) : null;
    }
    
    logoutUser() {
        localStorage.removeItem('cellogsmartwear_current_user');
    }
    
    // Order Methods
    async createOrder(orderData) {
        const order = {
            id: 'ORD' + Date.now().toString(),
            ...orderData,
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.orders.push(order);
        await this.saveToStorage();
        return order;
    }
    
    async getOrders(userId) {
        return this.orders.filter(order => order.userId === userId);
    }
    
    async updateOrderStatus(orderId, status) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            order.updatedAt = new Date().toISOString();
            await this.saveToStorage();
        }
        return order;
    }
}

// Create global database instance
window.db = new LocalDatabase();
