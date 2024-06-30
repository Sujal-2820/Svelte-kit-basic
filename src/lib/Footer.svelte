<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand } from 'flowbite-svelte';
</script>

<Footer footerType="socialmedia" class="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <FooterBrand href="https://yourbrand.com" name="Brand Name" class="text-2xl font-bold" />
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase">Resources</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4 transition duration-300 ease-in-out hover:text-yellow-400" href="/resource1">Resource 1</FooterLink>
                    <FooterLink liClass="mb-4 transition duration-300 ease-in-out hover:text-yellow-400" href="/about">About</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-100">Follow us</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4 transition duration-300 ease-in-out hover:text-yellow-400" href="https://instagram.com">Instagram</FooterLink>
                    <FooterLink liClass="mb-4 transition duration-300 ease-in-out hover:text-yellow-400" href="https://discord.com">Discord</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-100">Legal</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4 transition duration-300 ease-in-out hover:text-yellow-400" href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink liClass="mb-4 transition duration-300 ease-in-out hover:text-yellow-400" href="/terms">Terms & Conditions</FooterLink>
                </FooterLinkGroup>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-700 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="Your Brand™" year={new Date().getFullYear()} />
    </div>
</Footer>
