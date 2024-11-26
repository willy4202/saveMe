"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formatCurrency, parseCurrency } from "@/lib/utils";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const SalaryForm = () => {
  const formSchema = z.object({
    salaryDate: z.coerce
      .number()
      .min(1, { message: "1일부터 입력해주세요." })
      .max(31, { message: "31일까지 입력해주세요." })
      .nullable(), // 월급날
    salaryAmount: z.coerce.number().min(1).nullable(), // 월급액
    workDays: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .nullable(),
    workStartTime: z.coerce.number().min(1).nullable(), // 근무시간
    workEndTime: z.coerce.number().min(1).nullable(), // 근무시간
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salaryDate: null,
      salaryAmount: null,
      workDays: null,
      workStartTime: null,
      workEndTime: null,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="  min-h-[calc(100vh-52px)] flex flex-col  space-y-4"
      >
        <FormField
          control={form.control}
          name="salaryDate"
          render={({ field }) => (
            <>
              <FormItem className="flex items-center gap-2 font-bold">
                <FormLabel className="text-xl  md:text-3xl mt-2">
                  나는 매 월
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-20 text-xl md:text-3xl "
                    type="number"
                    placeholder="20"
                    maxLength={2}
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormLabel className="text-xl md:text-3xl">일에</FormLabel>
              </FormItem>
              <FormMessage />
            </>
          )}
        />
        <FormField
          control={form.control}
          name="salaryAmount"
          render={({ field }) => (
            <FormItem className="flex items-center  font-bold">
              <FormControl>
                <Input
                  className="w-60 text-xl md:text-3xl"
                  type="text" // number에서 text로 변경
                  placeholder="200,000"
                  {...field}
                  value={formatCurrency(field.value)}
                  onChange={(e) =>
                    field.onChange(parseCurrency(e.target.value))
                  }
                />
              </FormControl>
              <FormLabel className="text-xl md:text-3xl ml-2">
                원 받는다.
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workDays"
          render={({ field }) => (
            <FormItem className="flex flex-col font-bold">
              <FormLabel className="text-xl md:text-3xl">매 주</FormLabel>
              <FormControl>
                <ToggleGroup
                  type="multiple"
                  className="flex justify-start flex-wrap gap-2"
                  value={field.value?.map((day) => day.value) || []}
                  onValueChange={(selectedValues) => {
                    const selectedDays = selectedValues.map((value) => ({
                      value,
                      label: ["월", "화", "수", "목", "금", "토", "일"][
                        Number(value) - 1
                      ],
                    }));
                    field.onChange(selectedDays.length ? selectedDays : null);
                  }}
                >
                  {[
                    { value: "1", label: "월" },
                    { value: "2", label: "화" },
                    { value: "3", label: "수" },
                    { value: "4", label: "목" },
                    { value: "5", label: "금" },
                    { value: "6", label: "토" },
                    { value: "7", label: "일" },
                  ].map((day) => (
                    <ToggleGroupItem
                      key={day.value}
                      value={day.value}
                      className="w-10 h-10 text-lg data-[state=on]:bg-primary data-[state=on]:text-white"
                    >
                      {day.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </FormControl>
              <FormLabel className="text-xl md:text-3xl">요일에</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workStartTime"
          render={({ field }) => (
            <FormItem className="flex items-center font-bold">
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="9"
                  min={1}
                  max={24}
                  value={field.value ?? ""}
                  className="w-20 text-xl md:text-3xl"
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value ? Number(value) : null);
                  }}
                />
              </FormControl>
              <FormLabel className="text-xl md:text-3xl">시부터</FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workEndTime"
          render={({ field }) => (
            <FormItem className="flex items-center font-bold">
              <FormControl>
                <Input
                  placeholder="18"
                  className="w-20 text-xl md:text-3xl"
                  type="number"
                  {...field}
                  min={1}
                  max={24}
                  value={field.value ?? ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value ? Number(value) : null);
                  }}
                />
              </FormControl>
              <FormLabel className="text-xl md:text-3xl">
                시까지 일한다
              </FormLabel>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full mt-auto mb-4 bg-primary"
          size={"lg"}
        >
          다음
        </Button>
      </form>
    </Form>
  );
};

export default SalaryForm;
