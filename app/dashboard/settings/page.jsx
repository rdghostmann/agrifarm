import Image from 'next/image'
import React from 'react'

import Logo from "/public/logo.png";
import Leaf from "/public/leaf.png";



const page = () => {
  return (
    <>
      <header className="flex justify-between items-center bg-white shadow p-4">
        <h1 className="text-xl font-bold">Settings</h1>
      </header>
      <div className="">

        <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <div className="bg-white px-5 shadow-md rounded-lg">

              <div>
                <form id="setting_edit_form">

                  {/* <!-- Line 0 --> */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Logo (300x80)</label>
                      <div id="logo_show" className="bg-gray-100 h-fit w-fit p-4 rounded-lg">
                        <Image className="w-full" width={300} height={80} src={Logo} alt="Logo" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Logo for compact sidebar (32x32)</label>
                      <div id="leaf_show" className="bg-gray-100 h-fit w-fit p-4 rounded-lg">
                        <Image className="w-full" src={Leaf} style={{width: "32px", height:"32px"}}   alt="Compact Logo" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Favicon (16x16)</label>
                      <div id="fav_show" className="bg-gray-100 h-fit w-fit p-4 rounded-lg">
                      <Image className="w-full" src={Leaf} style={{width: "16px", height:"16px"}}   alt="Compact Logo" />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Line 1 --> */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Company/Farm Name*</label>
                      <input type="text" name="nom_modif" id="nom_modif" className="border border-gray-300 p-2 w-full rounded-md" required />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Country</label>
                      <input type="text" name="pays_modif" id="pays_modif" className="border border-gray-300 p-2 w-full rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Currency Symbol</label>
                      <input type="text" name="devise_modif" id="devise_modif" className="border border-gray-300 p-2 w-full rounded-md" required />
                    </div>
                  </div>

                  {/* <!-- Line 2 --> */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Change Logo</label>
                      <input type="file" name="logo_modif" id="logo_modif" className="border border-gray-300 p-2 w-full rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Change Logo for Compact Sidebar</label>
                      <input type="file" name="leaf_modif" id="leaf_modif" className="border border-gray-300 p-2 w-full rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Change Favicon</label>
                      <input type="file" name="fav_modif" id="fav_modif" className="border border-gray-300 p-2 w-full rounded-md" />
                    </div>
                  </div>

                  {/* <!-- Line 3 --> */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Notes</label>
                    <textarea name="notes_modif" id="notes_modif" className="form-textarea border border-gray-300 p-2 w-full rounded-md" placeholder="Other information"></textarea>
                  </div>

                  {/* <!-- Line 4 --> */}
                  <div className="flex justify-end">
                    <input type="hidden" name="btn_action_modif" id="btn_action_modif" value="Edit" />

                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default page
