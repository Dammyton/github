import React from "react";
import Skeleton from "react-loading-skeleton";
import { Table } from "react-bootstrap";
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonLoader() {
  return (
    <div className="container text-primary">
      <div className="row">
        <div>
          <Table responsive className="layout-fixed">
            <tbody>
              <tr>
                <td>
                  <Skeleton count={1} width={`100%`} height={30} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} width={`100%`} height={100} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} width={`100%`} height={100} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} width={`100%`} height={100} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} width={`100%`} height={100} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} width={`100%`} height={100} />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton count={1} width={`100%`} height={100} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
