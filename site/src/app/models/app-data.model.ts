import { AboutData } from "./about-data.model";
import { AddressData } from "./address-data.model";
import { FeatureData } from "./feature-data.model";

export interface AppData {
    features: FeatureData;
    about:AboutData;
    address: AddressData;
}