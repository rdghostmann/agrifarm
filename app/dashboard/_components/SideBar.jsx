import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';

import { usePathname } from 'next/navigation';

import Logo from "/public/logo.png";
import Leaf from "/public/leaf.png";

import { RiDashboard2Line } from "react-icons/ri";
import { FaBookOpen, FaCog, FaFileInvoiceDollar, FaLeaf, FaTasks, FaTractor, FaTree, FaUsers, FaWarehouse } from "react-icons/fa";
import { FaDollarSign, FaHouseCircleCheck } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import { MdInput } from "react-icons/md";


const SideBar = ({ isOpen }) => {

  const pathname = usePathname();

  return (
    <div className={`bg-slate-100 h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} hidden lg:block`}>
      <div className="flex flex-col h-full py-4">

        <div className="p-4">
          <Link href="/dashboard" className={`w-full flex items-center gap-4 p-2 rounded ${isOpen ? 'justify-start' : 'justify-center'}`}>
            <div className="mx-auto flex items-center justify-center rounded-lg ">
              {isOpen ? <Image src={Logo} alt="logo" width={170} priority /> : <Image src={Leaf} alt="logo" width={32} height={35} priority />}
            </div>
          </Link>
        </div>

        {/* Sidebar Links */}
        <nav className="overflow-y-auto
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ">
          <Link
            href="/dashboard"
            className={clsx(
              'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
              {
                'border-l-4 border-green-500 text-green-500': pathname === '/dashboard',
                'text-slate-500': pathname !== '/dashboard',
                'justify-start': isOpen,
                'bg-green-500 rounded-lg justify-center': !isOpen,
              }
            )}
          >
            <div className="flex items-center justify-center text-center rounded-lg">
              <RiDashboard2Line
                className={clsx(
                  'text-base',
                  {
                    'text-green-500': pathname === '/dashboard',
                    'text-slate-500': pathname !== '/dashboard',
                    'text-lg': !isOpen,
                  }
                )}
              />
            </div>
            {isOpen && (
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Dashboard</span>
              </div>
            )}
          </Link>

          <Link href="/dashboard/activities" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/activities',
              'text-slate-500': pathname !== '/dashboard/activities',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaTasks className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/activities',
                  'text-slate-500': pathname !== '/dashboard/activities',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Activities</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/expenses" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/expenses',
              'text-slate-500': pathname !== '/dashboard/expenses',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaFileInvoiceDollar className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/expenses',
                  'text-slate-500': pathname !== '/dashboard/expenses',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Expenses</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/incomes" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/incomes',
              'text-slate-500': pathname !== '/dashboard/incomes',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaDollarSign className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/incomes',
                  'text-slate-500': pathname !== '/dashboard/incomes',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Incomes</span> 

              
              </div>
            }
          </Link>

          <Link href="/dashboard/crops" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/crops',
              'text-slate-500': pathname !== '/dashboard/crops',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaLeaf className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/crops',
                  'text-slate-500': pathname !== '/dashboard/crops',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Crops</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/lands" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/lands',
              'text-slate-500': pathname !== '/dashboard/lands',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaTree className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/lands',
                  'text-slate-500': pathname !== '/dashboard/lands',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Lands</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/species" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/species',
              'text-slate-500': pathname !== '/dashboard/species',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <PiPlantFill className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/species',
                  'text-slate-500': pathname !== '/dashboard/species',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Species</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/inputs" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/inputs',
              'text-slate-500': pathname !== '/dashboard/inputs',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <MdInput className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/inputs',
                  'text-slate-500': pathname !== '/dashboard/inputs',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Inputs</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/warehouses" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/warehouses',
              'text-slate-500': pathname !== '/dashboard/warehouses',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaWarehouse className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/warehouses',
                  'text-slate-500': pathname !== '/dashboard/warehouses',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Warehouses</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/housings" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/housings',
              'text-slate-500': pathname !== '/dashboard/housings',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaHouseCircleCheck className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/housings',
                  'text-slate-500': pathname !== '/dashboard/housings',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Housing</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/equipments" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/equipments',
              'text-slate-500': pathname !== '/dashboard/equipments',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaTractor className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/equipments',
                  'text-slate-500': pathname !== '/dashboard/equipments',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Equipments</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/employees" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/employees',
              'text-slate-500': pathname !== '/dashboard/employees',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaUsers className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/employees',
                  'text-slate-500': pathname !== '/dashboard/employees',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Employees</span>
              </div>
            }
          </Link>

          <Link href="/dashboard/settings" className={clsx(
            'bg-white shadow-lg w-4/5 flex items-center gap-4 mx-auto mb-2 p-2',
            {
              'border-l-4 border-green-500 text-green-500': pathname === '/dashboard/settings',
              'text-slate-500': pathname !== '/dashboard/settings',
              'justify-start': isOpen,
              'bg-green-500 rounded-lg justify-center': !isOpen,
            }
          )}
          >
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaCog className={clsx(
                'text-base',
                {
                  'text-green-500': pathname === '/dashboard/settings',
                  'text-slate-500': pathname !== '/dashboard/settings',
                  'text-lg': !isOpen,
                }
              )} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Settings</span>
              </div>
            }
          </Link>
        </nav>

        <div className="p-1">
          <Link href="/dashboard/documentation" className={`mt-auto bg-green-500 w-4/5 text-white rounded shadow-lg flex items-center gap-4 mx-auto mb-2 p-2 ${isOpen ? 'justify-start' : 'bg-green-500 rounded-lg justify-center'}`}>
            <div className="flex items-center justify-center text-center rounded-lg ">
              <FaBookOpen className={`text-2xl  ${isOpen ? 'text-2xl' : 'text-3xl text-white'}`} />
            </div>
            {isOpen &&
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Documentation</span>
              </div>
            }
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
