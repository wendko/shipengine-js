/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type GetTrackingLogResponseBody = TrackingInformation;
export type TrackingNumber = string;
export type DateTime = string;
export type DateTime1 = string;
export type DateTime2 = string;
export type DateTime3 = string;
export type DateTime4 = string;
export type CountryCode = string;

export interface TrackingInformation {
  tracking_number?: TrackingNumber;
  status_code?: string;
  status_description?: string;
  carrier_status_code?: string;
  carrier_status_description?: string;
  ship_date?: DateTime;
  estimated_delivery_date?: DateTime1;
  actual_delivery_date?: DateTime2;
  exception_description?: string;
  events?: TrackEvent[];
}
/* track_event:
  title: track_event
  type: object
  description: A track event
  required:
    - occurred_at
    - city_locality
    - state_province
    - postal_code
  additionalProperties: false
  properties:
    occurred_at:
      allOf:
        - $ref: '#/components/schemas/date_time'
      description: Timestamp for carrier event
    carrier_occurred_at:
      allOf:
        - $ref: '#/components/schemas/date_time'
      description: >-
        Carrier timestamp for the event, it is assumed to be the local time
        of where the event occurred.
    description:
      type: string
      readOnly: true
      minLength: 0
      example: 'Delivered, In/At Mailbox'
      description: Event description
    city_locality:
      type: string
      readOnly: true
      example: AUSTIN
      minLength: 0
      description: City locality
    state_province:
      type: string
      readOnly: true
      example: TX
      minLength: 2
      description: State province
    postal_code:
      type: string
      readOnly: true
      example: 78756
      minLength: 0
      description: Postal code
    country_code:
      allOf:
        - $ref: '#/components/schemas/country_code'
    company_name:
      type: string
      readOnly: true
      example: Stamps.com
      minLength: 0
      description: Company Name
    signer:
      type: string
      minLength: 0
      readOnly: true
      description: Signer information
    event_code:
      type: string
      minLength: 0
      description: Event Code
    latitude:
      type: number
      format: double
      minimum: -90
      maximum: 90
      description: Latitude coordinate of tracking event.
    longitude:
      type: number
      format: double
      minimum: -180
      maximum: 180
      description: Longitude coordinate of tracking event. */
export interface TrackEvent {
  occurred_at: DateTime3;
  carrier_occurred_at?: DateTime4;
  city_locality: string;
  state_province: string;
  postal_code: string;
  country_code?: CountryCode;
  company_name?: string;
  signer?: string;
  event_code?: string;
  latitude?: number;
  longitude?: number;
}
