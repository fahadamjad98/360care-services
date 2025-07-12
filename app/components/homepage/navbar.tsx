"use client";
const menuItems = [
    { label: "Home", href: "/", hasDropdown: false },
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "About", href: "/about", hasDropdown: false },
    // { label: "Reviews", href: "#reviews", hasDropdown: false },
    // { label: "Contact", href: "#contact", hasDropdown: false }
  ];import React, { useState, useEffect } from 'react';
  import { ThemeSwitch } from "@/components/theme-switch";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge,
  Chip,
  Divider
} from '@heroui/react';
import { 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Home,
  Droplets,
  Zap,
  Wind,
  Settings,
  Shield,
  Clock,
  Star,
  Calendar,
  User,
  MessageCircle,
  PaintBucket
} from 'lucide-react';


export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg' 
          : 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-lg'
      }`}
      maxWidth="full"
      height="80px"
    >
      {/* Logo/Brand Section */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar
                icon={<Wrench className="w-6 h-6" />}
                className="bg-gradient-to-br from-primary-600 to-secondary-500 shadow-lg"
                size="md"
              />
              {/* <Badge
                content=""
                color="success"
                shape="circle"
                placement="bottom-right"
                className="w-3 h-3"
              /> */}
            </div>
            <Link href="/">
  <div className="flex flex-col cursor-pointer">
    <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
      360° Care Services
    </h1>
    <p className="text-xs text-slate-400 hidden sm:block">Professional Maintenance</p>
  </div>
</Link>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation Links */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link 
            href="/" 
            className="text-slate-200 hover:text-primary-400 transition-colors font-medium"
          >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-slate-200 hover:text-primary-400 transition-colors font-medium"
                endContent={<ChevronDown className="w-4 h-4" />}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Services"
              className="w-80"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
              href="PlumbingService"
                key="plumbing"
                startContent={
                  <Avatar
                    icon={<Droplets className="w-4 h-4" />}
                    className="bg-gradient-to-br from-primary-500 to-secondary-500"
                    size="sm"
                  />
                }
                description="Pipes, leaks, fixtures"
                className="text-slate-700 hover:bg-slate-50"
              >
                Plumbing Services
              </DropdownItem>
              <DropdownItem
              href="/ElectricalService"
                key="electrical"
                startContent={
                  <Avatar
                    icon={<Zap className="w-4 h-4" />}
                    className="bg-gradient-to-br from-primary-500 to-secondary-500"
                    size="sm"
                  />
                }
                description="Wiring, outlets, lighting"
                className="text-slate-700 hover:bg-slate-50"
              >
                Electrical Work
              </DropdownItem>
              <DropdownItem
               href="/AirConditioner"
                key="hvac"
                startContent={
                  <Avatar
                    icon={<Wind className="w-4 h-4" />}
                    className="bg-gradient-to-br from-primary-500 to-secondary-500"
                    size="sm"
                  />
                }
                description="Heating, cooling, ventilation"
                className="text-slate-700 hover:bg-slate-50"
              >
                Air Conditioner
              </DropdownItem>
              <DropdownItem
              href='/ApplianceRepairService'
                key="appliances"
                startContent={
                  <Avatar
                    icon={<Settings className="w-4 h-4" />}
                    className="bg-gradient-to-br from-primary-500 to-secondary-500"
                    size="sm"
                  />
                }
                description="All home appliances"
                className="text-slate-700 hover:bg-slate-50"
              >
                Appliance Repair
              </DropdownItem>
              <DropdownItem
              href='/CleaningService'
                key="cleaning"
                startContent={
                  <Avatar
                    icon={<Wrench className="w-4 h-4" />}
                    className="bg-gradient-to-br from-primary-500 to-secondary-500"
                    size="sm"
                  />
                }
                description="Cleaning & Cleansing"
                className="text-slate-700 hover:bg-slate-50"
              >
                Cleaning
              </DropdownItem>
              <DropdownItem
              href='/PaintingService'
                key="paintwork"
                startContent={
                  <Avatar
                    icon={<PaintBucket className="w-4 h-4" />}
                    className="bg-gradient-to-br from-primary-500 to-secondary-500"
                    size="sm"
                  />
                }
                description="Maintenance & fixes"
                className="text-slate-700 hover:bg-slate-50"
              >
                Painting
              </DropdownItem>
              {/* <DropdownItem key="all-services" className="border-t border-slate-200 mt-2">
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span className="font-semibold">View All Services</span>
                </div>
              </DropdownItem> */}
              
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
  <Link 
    href="/about"
    className="text-slate-200 hover:text-primary-400 transition-colors font-medium"
  >
    About Us
  </Link>
</NavbarItem>

       

        <NavbarItem>
          <Link 
            href="/ContactUs" 
            className="text-slate-200 hover:text-primary-400 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Contact Info & CTA */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <div className="flex items-center gap-4 text-sm">
            <Chip
              startContent={<Phone className="w-5 h-5" />}
              variant="bordered"
              color="primary"
              className="bg-primary-500/20 backdrop-blur-md border-primary-400/30"
              size="lg"
            >
              <span className="text-primary-200">+971585671289</span>
            </Chip>
            {/* <Chip
              startContent={<Clock className="w-3 h-3" />}
              variant="dot"
              color="success"
              size="sm"
            >
              <span className="text-success-400">24/7 Available</span>
            </Chip> */}
          </div>
        </NavbarItem>

        {/* <NavbarItem>
          <Button
            as={Link}
            href="#quote"
            className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            startContent={<Calendar className="w-4 h-4" />}
            size="sm"
          >
            Book Now
          </Button>
        </NavbarItem> */}

        
      </NavbarContent>
      <ThemeSwitch />
      {/* Mobile Menu */}
      <NavbarMenu className="bg-slate-100/80 backdrop-blur-xl border-r border-slate-800/50">
        <div className="flex flex-col gap-4 pt-6">
          {/* Mobile Contact Info */}
          <div className="px-4 pb-4 border-b border-slate-800/50">
            <div className="flex flex-col gap-3">
              <Chip
                startContent={<Phone className="w-4 h-4" />}
                variant="flat"
                color="primary"
                className="bg-primary-500/20"
                size='lg'
              >
                <span className=" font-semibold">+971585671289</span>
              </Chip>
              {/* <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-success-400" />
                <span className="text-success-400 text-sm">24/7 Emergency Service</span>
              </div> */}
            </div>
          </div>

          {/* Mobile Navigation Items */}
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              {item.hasDropdown ? (
                <div className="w-full">
                  <div className="flex items-center gap-3 px-4 py-3">
                    <Settings className="w-5 h-5" />
                    <span className="font-medium">Services</span>
                  </div>
                  <div className="ml-8 space-y-2">
  <Link
  onClick={() => setIsMenuOpen(false)}
    href="/PlumbingService"
    className="flex items-center gap-3 px-4 py-2 hover:text-primary-400 transition-colors"
  >
    <Droplets className="w-4 h-4" />
    <div>
      <div className="font-medium">Plumbing Services</div>
      <div className="text-xs text-slate-500">Pipes, leaks, fixtures</div>
    </div>
  </Link>
  <Link
  onClick={() => setIsMenuOpen(false)}
    href="/ElectricalService"
    className="flex items-center gap-3 px-4 py-2 hover:text-primary-400 transition-colors"
  >
    <Zap className="w-4 h-4" />
    <div>
      <div className="font-medium">Electrical Work</div>
      <div className="text-xs text-slate-500">Wiring, outlets, lighting</div>
    </div>
  </Link>
  <Link
  onClick={() => setIsMenuOpen(false)}
    href="/AirConditioner"
    className="flex items-center gap-3 px-4 py-2 hover:text-primary-400 transition-colors"
  >
    <Wind className="w-4 h-4" />
    <div>
      <div className="font-medium">Air Conditioner</div>
      <div className="text-xs text-slate-500">Heating, cooling, ventilation</div>
    </div>
  </Link>
  <Link
  onClick={() => setIsMenuOpen(false)}
    href="/ApplianceRepairService"
    className="flex items-center gap-3 px-4 py-2 hover:text-primary-400 transition-colors"
  >
    <Settings className="w-4 h-4" />
    <div>
      <div className="font-medium">Appliance Repair</div>
      <div className="text-xs text-slate-500">All home appliances</div>
    </div>
  </Link>
  <Link
  onClick={() => setIsMenuOpen(false)}
    href="/CleaningService"
    className="flex items-center gap-3 px-4 py-2 hover:text-primary-400 transition-colors"
  >
    <Wrench className="w-4 h-4" />
    <div>
      <div className="font-medium">Cleaning</div>
      <div className="text-xs text-slate-500">Cleaning & Cleansing</div>
    </div>
  </Link>
  <Link
  onClick={() => setIsMenuOpen(false)}
    href="/PaintingService"
    className="flex items-center gap-3 px-4 py-2 hover:text-primary-400 transition-colors"
  >
    <PaintBucket className="w-4 h-4" />
    <div>
      <div className="font-medium">Painting</div>
      <div className="text-xs text-slate-500">Maintenance & fixes</div>
    </div>
  </Link>
</div>

                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 w-full  hover:text-primary-400 transition-colors"
                  onPress={() => setIsMenuOpen(false)}
                >
                  {item.label === 'Home' && <Home className="w-5 h-5" />}
                  {item.label === 'About' && <Shield className="w-5 h-5" />}
                  {/* {item.label === 'Reviews' && <Star className="w-5 h-5" />} */}
                  {/* {item.label === 'Contact' && <MessageCircle className="w-5 h-5" />} */}
                  <span className="font-medium">{item.label}</span>
                  {/* {item.label === 'Reviews' && (
                    <Badge content="4.9" color="warning" size="sm" />
                  )} */}
                </Link>
              )}
            </NavbarMenuItem>
          ))}

          <Divider className="bg-slate-800/50 my-4" />

          {/* Mobile CTA */}
          {/* <div className="px-4">
            <Button
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold shadow-lg"
              startContent={<Calendar className="w-4 h-4" />}
              size="lg"
            >
              Schedule Service Now
            </Button>
          </div> */}

          {/* Mobile Footer Info */}
          {/* <div className="px-4 pt-4 border-t border-slate-800/50 mt-auto">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Serving Greater Metro Area</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <Mail className="w-4 h-4" />
              <span>info@360careservices.com</span>
            </div>
          </div> */}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}