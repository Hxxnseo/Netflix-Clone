import { useCallback, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }
  , []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "로그인" : "가입하기"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  label="닉네임"
                  onChange={(ev: any) => {setName(ev.target.value)}}
                  value={name}
                />
              )}
              <Input
                id="email"
                label="이메일 주소 또는 전화번호"
                type="email"
                onChange={(ev: any) => {setEmail(ev.target.value)}}
                value={email}
              />
              <Input
                id="password"
                label="비밀번호"
                onChange={(ev: any) => {setPassword(ev.target.value)}}
                value={password}
                type="password"
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "로그인" : "가입하기"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login" ? "Netflix 회원이 아닌가요?" : "이미 회원이신가요?" }
              <span onClick={toggleVariant} className="text-white ml-2 hover:underline cursor-pointer">
                {variant === "login" ? "지금 가입하세요" : "로그인"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
