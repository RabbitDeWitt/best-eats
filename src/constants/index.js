import { TbTruckDelivery } from 'react-icons/tb'
import { AiFillHeart, AiFillTag } from 'react-icons/ai'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import { MdOutlineHelp } from 'react-icons/md'
import { BsFillSaveFill } from 'react-icons/bs'
import { strawberries, meat, sandwich } from '../assets'




export const navLinks = [
  {
    id: 'ordens',
    title: 'Ordens',
    icon: <TbTruckDelivery size={25} className='mr-4'/>
  },
  {
    id: 'favorites',
    title: 'Favorites',
    icon: <AiFillHeart size={25} className='mr-4'/>
  },
  {
    id: 'wallet',
    title: 'Wallet',
    icon: <FaWallet size={25} className='mr-4'/>
  },
  {
    id: 'support',
    title: 'Support',
    icon: <MdOutlineHelp size={25} className='mr-4'/>
  },
  {
    id: 'promotions',
    title: 'Promotions',
    icon: <AiFillTag size={25} className='mr-4'/>
  },
  {
    id: 'best',
    title: 'Best One',
    icon: <BsFillSaveFill size={25} className='mr-4'/>
  },
  {
    id: 'invite',
    title: 'Invite Friends',
    icon: <FaUserFriends size={25} className='mr-4'/>
  },
]

export const cards = [
  {
    title: "Sun's Out, BOGO's Out",
    description: 'Through 8/26',
    bgImage: sandwich
  },
  {
    title: "New Restaurants",
    description: 'Added Daily',
    bgImage: meat
  },
  {
    title: "We Delicer Desserts Too",
    description: 'Tasty Treats',
    bgImage: strawberries
  }
]

export const categories = [
  {
    name: 'all'
  },
  {
    name: 'burger'
  },
  {
    name: 'pizza'
  },
  {
    name: 'salad'
  },
  {
    name: 'chicken'
  }
]

export const prices = [
  {
    tag: 'All'
  },
  {
    tag: '$'
  },
  {
    tag: '$$'
  },
  {
    tag: '$$$'
  },
  {
    tag: '$$$$'
  }
]