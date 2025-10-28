# 🏕️ Wild Oasis Website

Wild Oasis Website is a customer-facing web application for a boutique hotel, allowing guests to browse available cabins, make reservations, and manage their bookings. Built with modern web technologies and best practices, this project demonstrates proficiency in full-stack development, authentication, database management.



# ✨ Key Features

**1.) 🏠 Cabin Management**

- Browse available cabins with detailed information

- View real-time pricing and availability

- Filter cabins by capacity and features

**2.) 🔐 Authentication & Authorization**

- Secure Google OAuth 2.0 integration

- Guest profile management

- Protected routes and personalized dashboard

- Session management with NextAuth.js

**3.) 📅 Reservation System**

- Interactive date picker for booking selection

- Real-time availability checking

- Dynamic pricing calculation (including breakfast options)

- Booking confirmation and management

**4.) 👤 Guest Dashboard**

- View all current and past reservations

- Update booking details (dates, guest count, observations)

- Cancel or modify reservations

- Edit personal profile information

**5.) 🎨 User Experience**

- Server-side rendering for optimal performance

- Optimistic UI updates for instant feedback

- Loading states and error handling

- Image optimization with Next.js Image component

**6.) 🔧 Additional Features**

- Context API for global state management (reservation dates)

- Server Actions for data mutations

- Reusable React components

- Form validation and error messaging




# 🛠️ Tech Stack

### **Frontend**

- **Next.js (https://nextjs.org/)** - React framework with App Router

- **React (https://react.dev/)** - UI library with Server Components

- **Tailwind CSS (https://tailwindcss.com/)** - Utility-first CSS framework

- **React Day Picker (https://react-day-picker.js.org/)** - Date selection component

- **date-fns (https://date-fns.org/)** - Date utility library

- **Heroicons (https://heroicons.com/)** — Beautiful Tailwind-compatible SVG icon set

### **Backend & Database**

- **Supabase (https://supabase.com/)** - PostgreSQL database and backend services

- **Next.js Server Actions** - Server-side data mutations

- **Server Components** - Server-side rendering and data fetching

### **Authentication**

- **NextAuth.js (Auth.js) (https://authjs.dev/)** - Authentication solution

- **Google OAuth 2.0** - Social authentication provider

### **Development Tools**

- **ESLint (https://eslint.org/)** - Code linting

- **Prettier (https://prettier.io/)** - Code formatting

- **Git & GitHub** - Version control

- **Vercel (https://vercel.com/)** - Deployment platform




# 🎯 Learning Outcomes

This project demonstrates mastery of the following concepts:

### **Next.js & React**

- ✅ App Router and file-based routing

- ✅ Server Components vs Client Components

- ✅ Server Actions for data mutations

- ✅ Streaming and Suspense for progressive loading

- ✅ Image optimization with next/image

- ✅ Metadata API for SEO

- ✅ Error boundaries and error handling

- ✅ Dynamic routes and parallel routes

### **State Management**

- ✅ React Context API for global state

- ✅ Custom hooks (useReservation, useOutsideClick)

- ✅ Client-side state with useState and useReducer

- ✅ Server-side state with React Server Components

### **Authentication & Authorization**

- ✅ OAuth 2.0 implementation

- ✅ Session management

- ✅ Protected routes and middleware

- ✅ User profile management

### **Database & Backend**

- ✅ Supabase PostgreSQL integration

- ✅ CRUD operations (Create, Read, Update, Delete)

- ✅ Database relationships and foreign keys

- ✅ Real-time data fetching

- ✅ Optimistic UI updates

### **Performance Optimization**

- ✅ Server-side rendering (SSR)

- ✅ Static site generation (SSG) where applicable

- ✅ Image optimization and lazy loading

- ✅ Code splitting and bundle optimization

- ✅ Caching strategies

### **UI/UX Design**

- ✅ Accessibility best practices

- ✅ Loading states and skeletons

- ✅ Form validation and user feedback

- ✅ Tailwind CSS utility classes

### **Professional Development Practices**

- ✅ Git version control

- ✅ Environment variable management

- ✅ Error handling and logging

- ✅ Code organization and component structure




# 📁 Project Structure

```
wild-oasis-website/
├── app/                              # Next.js App Router
│   ├── _components/                  # Shared components
│   │   ├── Cabin.js                  # Cabin display component
│   │   ├── CabinCard.js              # Cabin card component
│   │   ├── CabinList.js              # Cabin listing grid
│   │   ├── Counter.js                # Guest counter component
│   │   ├── DateSelector.js           # Date range picker
│   │   ├── DeleteReservation.js      # Delete booking button
│   │   ├── Filter.js                 # Cabin filter component
│   │   ├── Header.js                 # Site header
│   │   ├── LoginMessage.js           # Login prompt message
│   │   ├── Logo.js                   # Brand logo component
│   │   ├── Navigation.js             # Main navigation
│   │   ├── Reservation.js            # Reservation wrapper
│   │   ├── ReservationCard.js        # Individual booking card
│   │   ├── ReservationContext.js     # Global reservation state
│   │   ├── ReservationForm.js        # Booking form
│   │   ├── ReservationList.js        # List of reservations
│   │   ├── ReservationReminder.js    # Booking reminder UI
│   │   ├── SelectCountry.js          # Country selector
│   │   ├── SideNavigation.js         # Account sidebar
│   │   ├── SignInButton.js           # Google sign-in button
│   │   ├── SignOutButton.js          # Sign out button
│   │   ├── Spinner.js                # Loading spinner
│   │   ├── SpinnerMini.js            # Small loading spinner
│   │   ├── SubmitButton.js           # Form submit button
│   │   ├── TextExpander.js           # Expandable text component
│   │   └── UpdateProfileForm.js      # Profile update form
│   ├── _lib/                         # Utility functions
│   │   ├── actions.js                # Server Actions
│   │   ├── auth.js                   # NextAuth configuration
│   │   ├── data-service.js           # Supabase data fetching
│   │   └── supabase.js               # Supabase client setup
│   ├── _styles/                      # Global styles
│   │   └── globals.css               # Global CSS
│   ├── about/                        # About page
│   │   └── page.js                   # About page content
│   ├── account/                      # Guest dashboard (protected)
│   │   ├── profile/                  # Profile management
│   │   │   └── page.js               # Profile page
│   │   ├── reservations/             # Reservations management
│   │   │   ├── edit/[bookingId]/     # Edit specific booking
│   │   │   │   ├── page.js           # Edit booking page
│   │   │   │   └── page.js           # Edit form
│   │   │   └── page.js               # All reservations page
│   │   ├── layout.js                 # Account layout (with sidebar)
│   │   └── page.js                   # Account dashboard home
│   ├── api/                          # API routes
│   │   └── auth/[...nextauth]/       # NextAuth API routes
│   │       └── route.js              # Auth handler
│   ├── cabins/                       # Cabin routes
│   │   ├── [cabinId]/                # Dynamic cabin details
│   │   │   └── page.js               # Individual cabin page
│   │   └── route.js                  # Cabins API route
│   ├── cabins/                       # Cabins listing page
│   │   ├── [cabinId]/                # Individual cabin
│   │   │   ├── not-found.js          # 404 for cabin
│   │   │   └── page.js               # Cabin details page
│   │   ├── loading.js                # Loading state
│   │   └── page.js                   # Cabins list page
│   ├── thankyou/                     # Booking confirmation
│   │   ├── loading.js                # Thank you loading
│   │   └── page.js                   # Thank you page
│   ├── login/                        # Login page
│   │   └── page.js                   # Login page
│   ├── error.js                      # Global error boundary
│   ├── icon.png                      # Favicon
│   ├── layout.js                     # Root layout
│   ├── loading.js                    # Root loading state
│   ├── not-found.js                  # 404 page
│   └── page.js                       # Homepage
├── node_modules/                     # Dependencies (ignored)
├── public/                           # Static assets
│   └── .env-local                    # Local environment template
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Git ignore rules
├── jsconfig.json                     # JavaScript configuration
├── middleware.js                     # Next.js middleware (auth)
├── next.config.mjs                   # Next.js configuration
├── package-lock.json                 # Dependency lock file
├── package.json                      # Project dependencies
├── postcss.config.js                 # PostCSS configuration
├── README.md                         # Project documentation
└── tailwind.config.js                # Tailwind CSS configuration
```




# 🚀 Getting Started

### **Prerequisites**

- **Node.js** (v18 or higher)

- **npm** or **yarn** or **pnpm**

- **Supabase Account** (free tier available)

- **Google Cloud Console Account** (for OAuth)

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/Bhavin-Patel-dev/Wild-Oasis-Website.git
   cd Wild-Oasis-Website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Supabase Configuration

   SUPABASE_URL=your_supabase_project_url

   SUPABASE_ANON_KEY=your_supabase_anon_key

   # NextAuth Configuration

   NEXTAUTH_URL=http://localhost:3000   # or whichever server your project runs on

   NEXTAUTH_SECRET=your_nextauth_secret

   # Google OAuth

   AUTH_GOOGLE_ID=your_google_client_id

   AUTH_GOOGLE_SECRET=your_google_client_secret
   ```

4. **Set up Supabase Database**

   Run the SQL schema in your Supabase SQL Editor:

   ```sql
   -- Create tables for cabins, guests, bookings, and settings
   -- (Schema available in /database/schema.sql)
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open the application**

   Navigate to (http://localhost:3000) in your browser, or whichever server your project runs on.



## **Getting Environment Variables**

1. **Supabase:**

   - Sign up at [supabase.com](https://supabase.com)

   - Create a new project

   - Find credentials in Project Settings → API

2. **Google OAuth:**

   - Go to [Google Cloud Console](https://console.cloud.google.com)

   - Create a new project

   - Enable Google+ API

   - Create OAuth 2.0 credentials

   - Add authorized redirect URIs

3. **NextAuth Secret:**
   ```bash
   openssl rand -base64 32
   ```




# 📦 Database Schema

### **Cabins Table**

```sql
CREATE TABLE cabins (
  id INT PRIMARY KEY,
  name TEXT,
  max_capacity INT,
  regular_price INT,
  discount INT,
  description TEXT,
  image TEXT
);
```

### **Guests Table**

```sql
CREATE TABLE guests (
  id INT PRIMARY KEY,
  created_at TIMESTAMPTZ,
  full_name TEXT,
  email TEXT,
  national_id TEXT,
  nationality TEXT,
  country_flag TEXT
);
```

### **Bookings Table**

```sql
CREATE TABLE bookings (
  id INT PRIMARY KEY,
  created_at TIMESTAMPTZ,
  startDate TIMESTAMP,
  endDate TIMESTAMP,
  num_nights INT,
  num_guests INT,
  cabin_price FLOAT,
  extras_price FLOAT,
  total_price FLOAT,
  status TEXT,
  has_breakfast BOOLEAN,
  is_paid BOOLEAN,
  observations TEXT,
  cabin_id INT REFERENCES cabins(id),
  guest_id INT REFERENCES guests(id)
);
```

### **Settings Table**

```sql
CREATE TABLE settings (
  id INT PRIMARY KEY,
  created_at TIMESTAMP,
  min_booking_length INT,
  max_booking_length INT,
  max_guests_per_booking INT,
  breakfast_price FLOAT
);
```



# 🤝 Contributing

Contributions are more than welcome!  
Whether it’s fixing bugs, improving documentation, or adding new features — every contribution helps make this project better.

If you’d like to contribute, please follow these simple steps:

1. Fork the project

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request and describe your changes. Your ideas, feedback, and improvements are always appreciated — let’s build something great together 🚀



# 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)

- [Supabase Documentation](https://supabase.com/docs)

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

- [React Documentation](https://react.dev)



**⭐ If you found this project helpful, please give it a star!**
