export function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-b from-background to-background-dark dark:from-background-dark dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted dark:text-muted-dark text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mainak. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

