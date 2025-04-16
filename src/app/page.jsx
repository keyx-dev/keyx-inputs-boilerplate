import Input from "@/components/input";
import InputWithStartIcon from "@/components/input-with-start-icon";
import LucideDollarSign from "@/components/lucide-dollar-sign";
import InputWithEndIcon from "@/components/input-with-end-icon";
import LucideMail from "@/components/lucide-mail";
import InputWithStartInlineAddOn from "@/components/input-with-start-inline-add-on";
import InputWithEndInlineAddOn from "@/components/input-with-end-inline-add-on";
import NumberInputWithChevrons from "@/components/number-input-with-chevrons";
import Textarea from "@/components/textarea";
import ShowHidePasswordInput from "@/components/show-hide-password-input";
import InputWithCharacterLimit from "@/components/input-with-character-limit";
import "./page.scss";

export default async function Page({ params, searchParams }) {
  undefined;

  return (
    <>
      <div className="page_21_4">
        <Input className="input_73_584" />
        <InputWithStartIcon
          icon={<LucideDollarSign className="lucideDollarSign_i_24_13_6_20" />}
          className="inputWith_24_13"
          type="number"
        />
        <InputWithEndIcon
          icon={<LucideMail className="lucideMail_i_27_25_11_110" />}
          className="inputWith_27_25"
        />
        <InputWithStartInlineAddOn
          startText="https://"
          className="inputWith_27_30"
        />
        <InputWithEndInlineAddOn endText=".com" className="inputWith_27_34" />
        <NumberInputWithChevrons className="numberInput_76_39" />
        <Textarea className="textarea_30_19" />
        <ShowHidePasswordInput className="showHide_32_46" />
        <InputWithCharacterLimit
          className="inputWith_67_46"
          maxCharacter={50}
        />
      </div>
    </>
  );
}
