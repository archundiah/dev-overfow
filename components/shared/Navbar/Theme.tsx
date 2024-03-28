'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'
import { themes } from '@/constants'
import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'

const Theme = () => {
  const { mode, setMode } = useTheme()

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger className='focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'>
          {mode === 'light' ? (
            <Image
              src='/assets/icons/sun.svg'
              alt='Sun'
              width={20}
              height={20}
              className='active-theme'
            />
          ) : (
            <Image
              src='/assets/icons/moon.svg'
              alt='Moon'
              width={20}
              height={20}
              className='active-theme'
            />
          )}
        </MenubarTrigger>
        <MenubarContent className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300'>
          {themes.map(({ icon, value, label }) => (
            <MenubarItem
              key={value}
              onClick={() => {
                setMode(value)

                if (value !== 'system') {
                  localStorage.setItem('theme', value)
                } else {
                  localStorage.removeItem('theme')
                }
              }}
              className='flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'
            >
              <Image
                src={icon}
                alt={value}
                width={16}
                height={16}
                className={`${mode === value && 'active-theme'}`}
              />
              <p
                className={`body-semibold text-light500 ${mode === value ? 'text-primary-500' : 'text-dark100_light900'}`}
              >
                {label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme
