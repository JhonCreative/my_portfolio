import {Tooltip, Button, Link} from "@nextui-org/react";
import github from '../../assets/images/svg/github.svg'
import instagram from '../../assets/images/svg/instagram.svg'
import file from '../../assets/images/svg/file.svg'

export default function LinksAuth() {
  return (
    <div className=" flex flex-row gap-3">
        <Tooltip showArrow={true} content={
          <div className="px-1 py-1">
            <div className="text-small font-bold">Jhon Creative</div>
            <div className="text-tiny">Git-Hub</div>
          </div>
        } color="primary" className="bg-opacity-90 backdrop-blur-sm">
            <Link href="https://eduardorl.vercel.app/" className="h-11 w-11 rounded-2xl px-0 mx-0 static min-w-0 bg-[#1b2223] flex items-center justify-center bg-opacity-80" target="_blank">
              <img src={github} alt="" className="w-5 h-5"/>
            </Link>
        </Tooltip>
        <Tooltip showArrow={true} content={
          <div className="px-1 py-1">
            <div className="text-small font-bold">jhon_kcp_</div>
            <div className="text-tiny">Instagram</div>
          </div>
        } color="secondary" className=" bg-opacity-90 backdrop-blur-sm">
            <Link href="https://www.instagram.com/jhon_kcp_/" className="h-11 w-11 rounded-2xl px-0 mx-0 static min-w-0 bg-[#dd2a7b] flex items-center justify-center bg-opacity-80" target="_blank">
              <img src={instagram} alt="" className="w-5 h-5"/>
            </Link>
        </Tooltip>
        <Tooltip showArrow={true} content={
          <div className="px-1 py-1">
            <div className="text-small font-bold">Jhon Kevin</div>
            <div className="text-tiny">Linkedin</div>
          </div>
        } color="danger" className=" bg-opacity-90 backdrop-blur-sm">
            <Link href="https://www.linkedin.com/in/jhon-kevin-5b1b46245/" className="h-11 w-11 rounded-2xl px-0 mx-0 static min-w-0 bg-[#0077b5] flex items-center justify-center text-white bg-opacity-80" target="_blank">
              in
            </Link>
        </Tooltip>
        <Tooltip showArrow={true} content={
          <div className="px-1 py-1">
            <div className="text-small font-bold">Jhon Kevin Calsina</div>
            <div className="text-tiny">Curriculum</div>
          </div>
        } color="primary" className=" bg-opacity-90 backdrop-blur-sm">
            <Link href="/public/pdf/MI_CV.pdf" className="h-11 rounded-2xl px-5 mx-0 static min-w-0 bg-[#35383a] flex items-center justify-center text-slate-100 dark:text-[#afabc2] font-bold gap-3 bg-opacity-80" target="_blanck">
              <img src={file} alt="" className="w-4 h-4"/>
              Resume
            </Link>
        </Tooltip>
    </div>
  );
}
