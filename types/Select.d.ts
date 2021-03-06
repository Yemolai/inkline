import {AttributesProviderMixin} from "./mixins/components/providers/AttributesProviderMixin";
import {ClassesProviderMixin} from "./mixins/components/providers/ClassesProviderMixin";
import {InjectParentFormProviderMixin} from "./mixins/forms/providers/InjectParentFormProviderMixin";
import {ModelProviderMixin} from "./mixins/forms/providers/ModelProviderMixin";
import {SchemaProviderMixin} from "./mixins/forms/providers/SchemaProviderMixin";
import {EmitChangeMethodMixin} from "./mixins/components/methods/EmitChangeMethodMixin";
import {EmitClickMethodMixin} from "./mixins/components/methods/EmitClickMethodMixin";
import {EmitFocusMethodMixin} from "./mixins/components/methods/EmitFocusMethodMixin";
import {EmitInputMethodMixin} from "./mixins/components/methods/EmitInputMethodMixin";
import {EmitKeydownMethodMixin} from "./mixins/components/methods/EmitKeydownMethodMixin";
import {DisabledPropertyMixin} from "./mixins/forms/properties/DisabledPropertyMixin";
import {NamePropertyMixin} from "./mixins/forms/properties/NamePropertyMixin";
import {ParentFormGroupPropertyMixin} from "./mixins/forms/properties/ParentFormGroupPropertyMixin";
import {ReadonlyPropertyMixin} from "./mixins/forms/properties/ReadonlyPropertyMixin";
import {SizePropertyMixin} from "./mixins/components/properties/SizePropertyMixin";
import {TabIndexPropertyMixin} from "./mixins/components/properties/TabIndexPropertyMixin";
import {Size} from "./constants/size";

export declare class ISelect implements AttributesProviderMixin, ClassesProviderMixin, InjectParentFormProviderMixin, ModelProviderMixin, SchemaProviderMixin, EmitChangeMethodMixin, EmitClickMethodMixin, EmitFocusMethodMixin, EmitInputMethodMixin, EmitKeydownMethodMixin, DisabledPropertyMixin, NamePropertyMixin, ParentFormGroupPropertyMixin, ReadonlyPropertyMixin, SizePropertyMixin, TabIndexPropertyMixin {
    filterable: boolean;
    native: boolean;
    focusInputRef(): void;
    clickInputRef(): void;


    disabled: boolean;
    name: string;
    parentForm: any;
    readonly: boolean;
    schema: any;
    size: Size;
    tabindex: number | string;
    value: string;
    attributes(): { [p: string]: string };
    classes(): Array<{ [p: string]: boolean }>;
    currentValue(): string;
    emitBlur(event: Event): void;
    emitChange(event: Event): void;
    emitClick(event: Event): void;
    emitFocus(event: Event): void;
    emitInput(value: any): void;
    emitKeydown(value: any): void;
    emitKeyup(value: any): void;
    isDisabled(): boolean;
    isGrouped(): boolean;
    isReadonly(): boolean;
    model(): string;
    parentFormGroup(): any;
    tabIndex(): number | string;
}